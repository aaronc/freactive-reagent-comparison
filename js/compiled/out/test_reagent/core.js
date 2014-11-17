// Compiled by ClojureScript 0.0-2371
goog.provide('test_reagent.core');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('figwheel.client');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
test_reagent.core.get_window_width = (function get_window_width(){return window.innerWidth;
});
test_reagent.core.get_window_height = (function get_window_height(){return window.innerHeight;
});
if(typeof test_reagent.core.width !== 'undefined')
{} else
{test_reagent.core.width = reagent.ratom.atom.call(null,test_reagent.core.get_window_width.call(null));
}
if(typeof test_reagent.core.height !== 'undefined')
{} else
{test_reagent.core.height = reagent.ratom.atom.call(null,test_reagent.core.get_window_height.call(null));
}
if(typeof test_reagent.core.mouse_x !== 'undefined')
{} else
{test_reagent.core.mouse_x = reagent.ratom.atom.call(null,(test_reagent.core.get_window_width.call(null) / (2)));
}
if(typeof test_reagent.core.mouse_y !== 'undefined')
{} else
{test_reagent.core.mouse_y = reagent.ratom.atom.call(null,(test_reagent.core.get_window_height.call(null) / (2)));
}
test_reagent.core.listen_BANG_ = (function listen_BANG_(target,name,handler){return target.addEventListener(name,handler);
});
if(typeof test_reagent.core.init !== 'undefined')
{} else
{test_reagent.core.init = (function (){test_reagent.core.listen_BANG_.call(null,window,"mousemove",(function (e){cljs.core.reset_BANG_.call(null,test_reagent.core.mouse_x,e.clientX);
return cljs.core.reset_BANG_.call(null,test_reagent.core.mouse_y,e.clientY);
}));
test_reagent.core.listen_BANG_.call(null,window,"resize",(function (e){cljs.core.reset_BANG_.call(null,test_reagent.core.width,test_reagent.core.get_window_width.call(null));
return cljs.core.reset_BANG_.call(null,test_reagent.core.height,test_reagent.core.get_window_height.call(null));
}));
return test_reagent.core.listen_BANG_.call(null,window,"touchmove",(function (e){var touches = e.touches;if(cljs.core._EQ_.call(null,(1),touches.length))
{e.preventDefault();
var touch = (touches[(0)]);cljs.core.reset_BANG_.call(null,test_reagent.core.mouse_x,touch.clientX);
return cljs.core.reset_BANG_.call(null,test_reagent.core.mouse_y,touch.clientY);
} else
{return null;
}
}));
})();
}
test_reagent.core.circle = (function circle(x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core.deref.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null);
});
if(typeof test_reagent.core.n !== 'undefined')
{} else
{test_reagent.core.n = reagent.ratom.atom.call(null,(4));
}
test_reagent.core.spacing_factor = (function spacing_factor(n,i){var i__$1 = (i + (1));var n__$1 = (n + (1));var x = (i__$1 / n__$1);return ((1) - Math.pow(((1) - x),(2)));
});
test_reagent.core.graph = (function graph(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),"20px"], null),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),reagent.ratom.make_reaction.call(null,(function (){return ("0 20 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_reagent.core.width))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_reagent.core.height)));
}))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,test_reagent.core.mouse_x,test_reagent.core.mouse_y], null),(function (){var n_STAR_ = cljs.core.deref.call(null,test_reagent.core.n);var spacer = cljs.core.partial.call(null,test_reagent.core.spacing_factor,n_STAR_);var offsets = cljs.core.map.call(null,spacer,cljs.core.range.call(null,n_STAR_));var lefts = cljs.core.vec.call(null,(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets){
return (function iter__23461(s__23462){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets){
return (function (){var s__23462__$1 = s__23462;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23462__$1);if(temp__4126__auto__)
{var s__23462__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23462__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23462__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23464 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23463 = (0);while(true){
if((i__23463 < size__12233__auto__))
{var x = cljs.core._nth.call(null,c__12232__auto__,i__23463);cljs.core.chunk_append.call(null,b__23464,reagent.ratom.make_reaction.call(null,((function (i__23463,x,c__12232__auto__,size__12233__auto__,b__23464,s__23462__$2,temp__4126__auto__,n_STAR_,spacer,offsets){
return (function (){return (x * cljs.core.deref.call(null,test_reagent.core.mouse_x));
});})(i__23463,x,c__12232__auto__,size__12233__auto__,b__23464,s__23462__$2,temp__4126__auto__,n_STAR_,spacer,offsets))
));
{
var G__23517 = (i__23463 + (1));
i__23463 = G__23517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23464),iter__23461.call(null,cljs.core.chunk_rest.call(null,s__23462__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23464),null);
}
} else
{var x = cljs.core.first.call(null,s__23462__$2);return cljs.core.cons.call(null,reagent.ratom.make_reaction.call(null,((function (x,s__23462__$2,temp__4126__auto__,n_STAR_,spacer,offsets){
return (function (){return (x * cljs.core.deref.call(null,test_reagent.core.mouse_x));
});})(x,s__23462__$2,temp__4126__auto__,n_STAR_,spacer,offsets))
),iter__23461.call(null,cljs.core.rest.call(null,s__23462__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets))
,null,null));
});})(n_STAR_,spacer,offsets))
;return iter__12234__auto__.call(null,offsets);
})());var rights = cljs.core.vec.call(null,(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts){
return (function iter__23465(s__23466){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts){
return (function (){var s__23466__$1 = s__23466;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23466__$1);if(temp__4126__auto__)
{var s__23466__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23466__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23466__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23468 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23467 = (0);while(true){
if((i__23467 < size__12233__auto__))
{var x = cljs.core._nth.call(null,c__12232__auto__,i__23467);cljs.core.chunk_append.call(null,b__23468,reagent.ratom.make_reaction.call(null,((function (i__23467,x,c__12232__auto__,size__12233__auto__,b__23468,s__23466__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts){
return (function (){var w = cljs.core.deref.call(null,test_reagent.core.width);return (w - (x * (w - cljs.core.deref.call(null,test_reagent.core.mouse_x))));
});})(i__23467,x,c__12232__auto__,size__12233__auto__,b__23468,s__23466__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts))
));
{
var G__23518 = (i__23467 + (1));
i__23467 = G__23518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23468),iter__23465.call(null,cljs.core.chunk_rest.call(null,s__23466__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23468),null);
}
} else
{var x = cljs.core.first.call(null,s__23466__$2);return cljs.core.cons.call(null,reagent.ratom.make_reaction.call(null,((function (x,s__23466__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts){
return (function (){var w = cljs.core.deref.call(null,test_reagent.core.width);return (w - (x * (w - cljs.core.deref.call(null,test_reagent.core.mouse_x))));
});})(x,s__23466__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts))
),iter__23465.call(null,cljs.core.rest.call(null,s__23466__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts))
,null,null));
});})(n_STAR_,spacer,offsets,lefts))
;return iter__12234__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());var tops = cljs.core.vec.call(null,(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights){
return (function iter__23469(s__23470){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights){
return (function (){var s__23470__$1 = s__23470;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23470__$1);if(temp__4126__auto__)
{var s__23470__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23470__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23470__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23472 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23471 = (0);while(true){
if((i__23471 < size__12233__auto__))
{var y = cljs.core._nth.call(null,c__12232__auto__,i__23471);cljs.core.chunk_append.call(null,b__23472,reagent.ratom.make_reaction.call(null,((function (i__23471,y,c__12232__auto__,size__12233__auto__,b__23472,s__23470__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights){
return (function (){return (y * cljs.core.deref.call(null,test_reagent.core.mouse_y));
});})(i__23471,y,c__12232__auto__,size__12233__auto__,b__23472,s__23470__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights))
));
{
var G__23519 = (i__23471 + (1));
i__23471 = G__23519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23472),iter__23469.call(null,cljs.core.chunk_rest.call(null,s__23470__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23472),null);
}
} else
{var y = cljs.core.first.call(null,s__23470__$2);return cljs.core.cons.call(null,reagent.ratom.make_reaction.call(null,((function (y,s__23470__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights){
return (function (){return (y * cljs.core.deref.call(null,test_reagent.core.mouse_y));
});})(y,s__23470__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights))
),iter__23469.call(null,cljs.core.rest.call(null,s__23470__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights))
;return iter__12234__auto__.call(null,offsets);
})());var bottoms = cljs.core.vec.call(null,(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops){
return (function iter__23473(s__23474){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops){
return (function (){var s__23474__$1 = s__23474;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23474__$1);if(temp__4126__auto__)
{var s__23474__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23474__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23474__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23476 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23475 = (0);while(true){
if((i__23475 < size__12233__auto__))
{var y = cljs.core._nth.call(null,c__12232__auto__,i__23475);cljs.core.chunk_append.call(null,b__23476,reagent.ratom.make_reaction.call(null,((function (i__23475,y,c__12232__auto__,size__12233__auto__,b__23476,s__23474__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops){
return (function (){var h = cljs.core.deref.call(null,test_reagent.core.height);return (h - (y * (h - cljs.core.deref.call(null,test_reagent.core.mouse_y))));
});})(i__23475,y,c__12232__auto__,size__12233__auto__,b__23476,s__23474__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops))
));
{
var G__23520 = (i__23475 + (1));
i__23475 = G__23520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23476),iter__23473.call(null,cljs.core.chunk_rest.call(null,s__23474__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23476),null);
}
} else
{var y = cljs.core.first.call(null,s__23474__$2);return cljs.core.cons.call(null,reagent.ratom.make_reaction.call(null,((function (y,s__23474__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops){
return (function (){var h = cljs.core.deref.call(null,test_reagent.core.height);return (h - (y * (h - cljs.core.deref.call(null,test_reagent.core.mouse_y))));
});})(y,s__23474__$2,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops))
),iter__23473.call(null,cljs.core.rest.call(null,s__23474__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops))
;return iter__12234__auto__.call(null,cljs.core.reverse.call(null,offsets));
})());return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23477(s__23478){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23478__$1 = s__23478;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23478__$1);if(temp__4126__auto__)
{var s__23478__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23478__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23478__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23480 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23479 = (0);while(true){
if((i__23479 < size__12233__auto__))
{var i = cljs.core._nth.call(null,c__12232__auto__,i__23479);cljs.core.chunk_append.call(null,b__23480,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,lefts,i),test_reagent.core.mouse_y], null));
{
var G__23521 = (i__23479 + (1));
i__23479 = G__23521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23480),iter__23477.call(null,cljs.core.chunk_rest.call(null,s__23478__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23480),null);
}
} else
{var i = cljs.core.first.call(null,s__23478__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,lefts,i),test_reagent.core.mouse_y], null),iter__23477.call(null,cljs.core.rest.call(null,s__23478__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;return iter__12234__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23481(s__23482){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23482__$1 = s__23482;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23482__$1);if(temp__4126__auto__)
{var s__23482__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23482__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23482__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23484 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23483 = (0);while(true){
if((i__23483 < size__12233__auto__))
{var i = cljs.core._nth.call(null,c__12232__auto__,i__23483);cljs.core.chunk_append.call(null,b__23484,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,rights,i),test_reagent.core.mouse_y], null));
{
var G__23522 = (i__23483 + (1));
i__23483 = G__23522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23484),iter__23481.call(null,cljs.core.chunk_rest.call(null,s__23482__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23484),null);
}
} else
{var i = cljs.core.first.call(null,s__23482__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,rights,i),test_reagent.core.mouse_y], null),iter__23481.call(null,cljs.core.rest.call(null,s__23482__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;return iter__12234__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23485(s__23486){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23486__$1 = s__23486;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23486__$1);if(temp__4126__auto__)
{var s__23486__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23486__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23486__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23488 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23487 = (0);while(true){
if((i__23487 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__23487);cljs.core.chunk_append.call(null,b__23488,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,test_reagent.core.mouse_x,cljs.core.nth.call(null,tops,j)], null));
{
var G__23523 = (i__23487 + (1));
i__23487 = G__23523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23488),iter__23485.call(null,cljs.core.chunk_rest.call(null,s__23486__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23488),null);
}
} else
{var j = cljs.core.first.call(null,s__23486__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,test_reagent.core.mouse_x,cljs.core.nth.call(null,tops,j)], null),iter__23485.call(null,cljs.core.rest.call(null,s__23486__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;return iter__12234__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23489(s__23490){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23490__$1 = s__23490;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23490__$1);if(temp__4126__auto__)
{var s__23490__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23490__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23490__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23492 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23491 = (0);while(true){
if((i__23491 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__23491);cljs.core.chunk_append.call(null,b__23492,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,test_reagent.core.mouse_x,cljs.core.nth.call(null,bottoms,j)], null));
{
var G__23524 = (i__23491 + (1));
i__23491 = G__23524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23492),iter__23489.call(null,cljs.core.chunk_rest.call(null,s__23490__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23492),null);
}
} else
{var j = cljs.core.first.call(null,s__23490__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,test_reagent.core.mouse_x,cljs.core.nth.call(null,bottoms,j)], null),iter__23489.call(null,cljs.core.rest.call(null,s__23490__$2)));
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;return iter__12234__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23493(s__23494){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23494__$1 = s__23494;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23494__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var i = cljs.core.first.call(null,xs__4624__auto__);var iterys__12230__auto__ = ((function (s__23494__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23495(s__23496){return (new cljs.core.LazySeq(null,((function (s__23494__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23496__$1 = s__23496;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23496__$1);if(temp__4126__auto____$1)
{var s__23496__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23496__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23496__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23498 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23497 = (0);while(true){
if((i__23497 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__23497);cljs.core.chunk_append.call(null,b__23498,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)], null));
{
var G__23525 = (i__23497 + (1));
i__23497 = G__23525;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23498),iter__23495.call(null,cljs.core.chunk_rest.call(null,s__23496__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23498),null);
}
} else
{var j = cljs.core.first.call(null,s__23496__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,tops,j)], null),iter__23495.call(null,cljs.core.rest.call(null,s__23496__$2)));
}
} else
{return null;
}
break;
}
});})(s__23494__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(s__23494__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__23493.call(null,cljs.core.rest.call(null,s__23494__$1)));
} else
{{
var G__23526 = cljs.core.rest.call(null,s__23494__$1);
s__23494__$1 = G__23526;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;return iter__12234__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23499(s__23500){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23500__$1 = s__23500;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23500__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var i = cljs.core.first.call(null,xs__4624__auto__);var iterys__12230__auto__ = ((function (s__23500__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23501(s__23502){return (new cljs.core.LazySeq(null,((function (s__23500__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23502__$1 = s__23502;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23502__$1);if(temp__4126__auto____$1)
{var s__23502__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23502__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23502__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23504 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23503 = (0);while(true){
if((i__23503 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__23503);cljs.core.chunk_append.call(null,b__23504,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)], null));
{
var G__23527 = (i__23503 + (1));
i__23503 = G__23527;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23504),iter__23501.call(null,cljs.core.chunk_rest.call(null,s__23502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23504),null);
}
} else
{var j = cljs.core.first.call(null,s__23502__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,lefts,i),cljs.core.nth.call(null,bottoms,j)], null),iter__23501.call(null,cljs.core.rest.call(null,s__23502__$2)));
}
} else
{return null;
}
break;
}
});})(s__23500__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(s__23500__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__23499.call(null,cljs.core.rest.call(null,s__23500__$1)));
} else
{{
var G__23528 = cljs.core.rest.call(null,s__23500__$1);
s__23500__$1 = G__23528;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;return iter__12234__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23505(s__23506){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23506__$1 = s__23506;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23506__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var i = cljs.core.first.call(null,xs__4624__auto__);var iterys__12230__auto__ = ((function (s__23506__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23507(s__23508){return (new cljs.core.LazySeq(null,((function (s__23506__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23508__$1 = s__23508;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23508__$1);if(temp__4126__auto____$1)
{var s__23508__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23508__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23508__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23510 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23509 = (0);while(true){
if((i__23509 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__23509);cljs.core.chunk_append.call(null,b__23510,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)], null));
{
var G__23529 = (i__23509 + (1));
i__23509 = G__23529;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23510),iter__23507.call(null,cljs.core.chunk_rest.call(null,s__23508__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23510),null);
}
} else
{var j = cljs.core.first.call(null,s__23508__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,tops,j)], null),iter__23507.call(null,cljs.core.rest.call(null,s__23508__$2)));
}
} else
{return null;
}
break;
}
});})(s__23506__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(s__23506__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__23505.call(null,cljs.core.rest.call(null,s__23506__$1)));
} else
{{
var G__23530 = cljs.core.rest.call(null,s__23506__$1);
s__23506__$1 = G__23530;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;return iter__12234__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})(),(function (){var iter__12234__auto__ = ((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23511(s__23512){return (new cljs.core.LazySeq(null,((function (n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23512__$1 = s__23512;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23512__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var i = cljs.core.first.call(null,xs__4624__auto__);var iterys__12230__auto__ = ((function (s__23512__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function iter__23513(s__23514){return (new cljs.core.LazySeq(null,((function (s__23512__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms){
return (function (){var s__23514__$1 = s__23514;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23514__$1);if(temp__4126__auto____$1)
{var s__23514__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23514__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__23514__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__23516 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__23515 = (0);while(true){
if((i__23515 < size__12233__auto__))
{var j = cljs.core._nth.call(null,c__12232__auto__,i__23515);cljs.core.chunk_append.call(null,b__23516,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)], null));
{
var G__23531 = (i__23515 + (1));
i__23515 = G__23531;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23516),iter__23513.call(null,cljs.core.chunk_rest.call(null,s__23514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23516),null);
}
} else
{var j = cljs.core.first.call(null,s__23514__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.circle,cljs.core.nth.call(null,rights,i),cljs.core.nth.call(null,bottoms,j)], null),iter__23513.call(null,cljs.core.rest.call(null,s__23514__$2)));
}
} else
{return null;
}
break;
}
});})(s__23512__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(s__23512__$1,i,xs__4624__auto__,temp__4126__auto__,n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,n_STAR_)));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__23511.call(null,cljs.core.rest.call(null,s__23512__$1)));
} else
{{
var G__23532 = cljs.core.rest.call(null,s__23512__$1);
s__23512__$1 = G__23532;
continue;
}
}
} else
{return null;
}
break;
}
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
,null,null));
});})(n_STAR_,spacer,offsets,lefts,rights,tops,bottoms))
;return iter__12234__auto__.call(null,cljs.core.range.call(null,n_STAR_));
})()], null);
})()], null);
});
test_reagent.core.info = (function info(){var number_of_points = reagent.ratom.make_reaction.call(null,(function (){var n_STAR_ = cljs.core.deref.call(null,test_reagent.core.n);var n_STAR___$1 = ((1) + ((2) * n_STAR_));return (n_STAR___$1 * n_STAR___$1);
}));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/aaronc/freactive"], null),"freactive"], null)," performance test - reagent comparison version (this is reagent and react - not freactive!). "], null),"N = ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_reagent.core.n)))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (number_of_points){
return (function (_){return cljs.core.swap_BANG_.call(null,test_reagent.core.n,cljs.core.dec);
});})(number_of_points))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (number_of_points){
return (function (_){return cljs.core.swap_BANG_.call(null,test_reagent.core.n,cljs.core.inc);
});})(number_of_points))
], null),"+"], null),", number of points = ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,number_of_points))),", mouse at ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_reagent.core.mouse_x))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_reagent.core.mouse_y))),". "], null)], null);
});
test_reagent.core.view = (function view(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.info], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.graph], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_reagent.core.view], null),document.getElementById("root"));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=core.js.map