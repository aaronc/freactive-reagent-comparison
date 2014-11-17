(ns test-reagent.core
  (:refer-clojure :exclude [atom])
  (:require
   [figwheel.client :as fw :include-macros true]
   [reagent.ratom :refer [atom] :refer-macros [reaction]]
   [reagent.core :as reagent])
  )

(enable-console-print!)
;
;(dom/enable-fps-instrumentation!)
;
(defn- get-window-width [] (.-innerWidth js/window))

(defn- get-window-height [] (.-innerHeight js/window))

(defonce width (atom (get-window-width)))
;
(defonce height (atom (get-window-height)))

(defonce mouse-x (atom (/ (get-window-width) 2)))

(defonce mouse-y (atom (/ (get-window-height) 2)))

(defn listen! [target name handler]
      (.addEventListener target name handler))

(defonce init
         (do
           (listen! js/window "mousemove"
                        (fn [e]
                            (reset! mouse-x (.-clientX e))
                            (reset! mouse-y (.-clientY e))))

           (listen! js/window "resize"
                        (fn [e]
                            (reset! width (get-window-width))
                            (reset! height (get-window-height))))

           (listen! js/window "touchmove"
                        (fn [e]
                            (let [touches (.-touches e)]
                                 (when (= 1 (alength touches))
                                       (.preventDefault e)
                                       (let [touch (aget touches 0)]
                                            (reset! mouse-x (.-clientX touch))
                                            (reset! mouse-y (.-clientY touch)))))))))

(defn circle [x y]
      [:circle {:cx @x :cy @y :r 2 :stroke "black" :fill "black"}])

(defonce n (atom 4))
;
(defn- spacing-factor [n i]
       (let [i (inc i)
             n (inc n)
             x (/ i n)]
            (- 1 (.pow js/Math (- 1 x) 2))))

(defn graph []
      [:svg
        {:width   "100%" :height "100%"
         :style   {:position "absolute" :left 0 :top "20px"}
         :viewBox (reaction (str "0 20 " @width " " @height))}
        [circle mouse-x mouse-y]
       (let [n* @n
             spacer (partial spacing-factor n*)
             offsets (map spacer (range n*))
             lefts (vec (for [x offsets] (reaction (* x @mouse-x))))
             rights (vec (for [x (reverse offsets)] (reaction (let [w @width] (- w (* x (- w @mouse-x)))))))
             tops (vec (for [y offsets] (reaction (* y @mouse-y))))
             bottoms (vec (for [y (reverse offsets)] (reaction (let [h @height] (- h (* y (- h @mouse-y)))))))]
            [:g
             (for [i (range n*)] [circle (nth lefts i) mouse-y])
             (for [i (range n*)] [circle (nth rights i) mouse-y])
             (for [j (range n*)] [circle mouse-x (nth tops j)])
             (for [j (range n*)] [circle mouse-x (nth bottoms j)])
             (for [i (range n*) j (range n*)] [circle (nth lefts i) (nth tops j)])
             (for [i (range n*) j (range n*)] [circle (nth lefts i) (nth bottoms j)])
             (for [i (range n*) j (range n*)] [circle (nth rights i) (nth tops j)])
             (for [i (range n*) j (range n*)] [circle (nth rights i) (nth bottoms j)])])])

(defn view []
      [:div
       {:width "100%" :height "100%"}
       [:div
        {:width "100%"
         :style
                {:position "absolute" :left 0 :top 0 :height "12px"
                 :font-size "12px"
                 :font-family "sans-serif"}}
        (let [number-of-points
              (reaction (let [n* @n n* (+ 1 (* 2 n*))] (* n* n*)))]
             [:span
              [:strong [:em [:a {:href "https://github.com/aaronc/freactive"} "freactive"]
                        " performance test - reagent comparison version (this
                         is reagent and react - not freactive!). "]
               "N = " (str @n) " "
               [:button {:on-click (fn [_] (swap! n dec))} "-"]
               [:button {:on-click (fn [_] (swap! n inc))} "+"]
               ", number of points = "
               (str @number-of-points)
               ", mouse at "
               (str @mouse-x ", " @mouse-y)
               ". "]])]
       [graph]
       ])

(reagent/render-component [view]
                          (.getElementById js/document "root"))


(fw/watch-and-reload)

