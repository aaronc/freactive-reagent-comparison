(defproject freactive-reagent-comparison "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                  [org.clojure/clojurescript "0.0-2371"]
                  [reagent "0.4.3"]]
  :profiles
  {:dev
    {:plugins [[com.cemerick/austin "0.1.5"]
               [lein-cljsbuild "1.0.3"]
               [lein-figwheel "0.1.5-SNAPSHOT"]]
     :dependencies
     [[com.cemerick/clojurescript.test "0.3.1"]
      [figwheel "0.1.5-SNAPSHOT"]]
     :cljsbuild {:builds
                 [{:id
                   "example"
                   :source-paths ["src" "test"]
                   :compiler     {:output-to     "resources/public/js/compiled/app.js"
                                  :output-dir    "resources/public/js/compiled/out"
                                  :preamble ["reagent/react.js"]
                                  :optimizations :none
                                  :source-map    true}}]}
     }}
  )
