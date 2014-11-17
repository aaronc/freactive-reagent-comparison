// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){var p = cljs.core.nth.call(null,v,(1),null);if(cljs.core.map_QMARK_.call(null,p))
{return p;
} else
{return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){var p = cljs.core.nth.call(null,v,(1),null);var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));if((cljs.core.count.call(null,v) > first_child))
{return cljs.core.subvec.call(null,v,first_child);
} else
{return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (mem){
return (function (arg){var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);if(!((v == null)))
{return v;
} else
{var ret = f.call(null,arg);cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);
return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){if((cljs.core.count.call(null,s) < (2)))
{return clojure.string.upper_case.call(null,s);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1))));
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name.call(null,dashed);var vec__13267 = clojure.string.split.call(null,name_str,/-/);var start = cljs.core.nth.call(null,vec__13267,(0),null);var parts = cljs.core.nthnext.call(null,vec__13267,(1));if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start)))
{return name_str;
} else
{return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.cljs$lang$type = true;
reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";
reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"reagent.impl.util/partial-ifn");
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__13269__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__11495__auto___13270 = self__.p;if(cljs.core.truth_(or__11495__auto___13270))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__13269 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13269__delegate.call(this,self__,a);};
G__13269.cljs$lang$maxFixedArity = 1;
G__13269.cljs$lang$applyTo = (function (arglist__13271){
var self__ = cljs.core.first(arglist__13271);
var a = cljs.core.rest(arglist__13271);
return G__13269__delegate(self__,a);
});
G__13269.cljs$core$IFn$_invoke$arity$variadic = G__13269__delegate;
return G__13269;
})()
;
reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args13268){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13268)));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__13272__delegate = function (a){var _ = this;var or__11495__auto___13273 = self__.p;if(cljs.core.truth_(or__11495__auto___13273))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__13272 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13272__delegate.call(this,a);};
G__13272.cljs$lang$maxFixedArity = 0;
G__13272.cljs$lang$applyTo = (function (arglist__13274){
var a = cljs.core.seq(arglist__13274);
return G__13272__delegate(a);
});
G__13272.cljs$core$IFn$_invoke$arity$variadic = G__13272__delegate;
return G__13272;
})()
;
reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){return (new reagent.impl.util.partial_ifn(f,args,p));
});
reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){var or__11495__auto__ = cljs.core.ifn_QMARK_.call(null,x);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var G__13278 = x;if(G__13278)
{var bit__12159__auto__ = (G__13278.cljs$lang$protocol_mask$partition1$ & (256));if((bit__12159__auto__) || (G__13278.cljs$core$IMultiFn$))
{return true;
} else
{if((!G__13278.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__13278);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__13278);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var c1 = temp__4126__auto__;var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var c2 = temp__4126__auto____$1;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2));
} else
{return null;
}
} else
{return null;
}
})();if((class$ == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var s1 = temp__4126__auto__;var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var s2 = temp__4126__auto____$1;return cljs.core.merge.call(null,s1,s2);
} else
{return null;
}
} else
{return null;
}
})();if((style == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){if((p1 == null))
{return p2;
} else
{if(cljs.core.map_QMARK_.call(null,p1))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null)))))));
}
return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util.doc_node_type = (9);
reagent.impl.util.react_id_name = "data-reactid";
reagent.impl.util.get_react_node = (function get_react_node(cont){if((cont == null))
{return null;
} else
{if((reagent.impl.util.doc_node_type === (cont["nodeType"])))
{return (cont["documentElement"]);
} else
{return (cont["firstChild"]);
}
}
});
reagent.impl.util.get_root_id = (function get_root_id(cont){var G__13280 = reagent.impl.util.get_react_node.call(null,cont);var G__13280__$1 = (((G__13280 == null))?null:(G__13280["getAttribute"])(reagent.impl.util.react_id_name));return G__13280__$1;
});
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.util.re_render_component = (function re_render_component(comp,container){try{return (React["renderComponent"])(comp.call(null),container);
}catch (e13283){if((e13283 instanceof Object))
{var e = e13283;try{(React["unmountComponentAtNode"])(container);
}catch (e13284){if((e13284 instanceof Object))
{var e_13285__$1 = e13284;if(typeof console !== 'undefined')
{console.log(e_13285__$1);
} else
{}
} else
{throw e13284;

}
}var temp__4126__auto___13286 = reagent.impl.util.get_react_node.call(null,container);if(cljs.core.truth_(temp__4126__auto___13286))
{var n_13287 = temp__4126__auto___13286;(n_13287["removeAttribute"])(reagent.impl.util.react_id_name);
(n_13287["innerHTML"] = "");
} else
{}
throw e;
} else
{throw e13283;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){return (React["renderComponent"])(comp.call(null),container,(function (){var id_13288 = reagent.impl.util.get_root_id.call(null,container);if((id_13288 == null))
{} else
{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,id_13288,((function (id_13288){
return (function (){return reagent.impl.util.re_render_component.call(null,comp,container);
});})(id_13288))
);
}
if((callback == null))
{return null;
} else
{return callback.call(null);
}
}));
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){var id_13289 = reagent.impl.util.get_root_id.call(null,container);if((id_13289 == null))
{} else
{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,id_13289);
}
return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){var _STAR_always_update_STAR_13295_13300 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = true;
var seq__13296_13301 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));var chunk__13297_13302 = null;var count__13298_13303 = (0);var i__13299_13304 = (0);while(true){
if((i__13299_13304 < count__13298_13303))
{var f_13305 = cljs.core._nth.call(null,chunk__13297_13302,i__13299_13304);f_13305.call(null);
{
var G__13306 = seq__13296_13301;
var G__13307 = chunk__13297_13302;
var G__13308 = count__13298_13303;
var G__13309 = (i__13299_13304 + (1));
seq__13296_13301 = G__13306;
chunk__13297_13302 = G__13307;
count__13298_13303 = G__13308;
i__13299_13304 = G__13309;
continue;
}
} else
{var temp__4126__auto___13310 = cljs.core.seq.call(null,seq__13296_13301);if(temp__4126__auto___13310)
{var seq__13296_13311__$1 = temp__4126__auto___13310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13296_13311__$1))
{var c__12265__auto___13312 = cljs.core.chunk_first.call(null,seq__13296_13311__$1);{
var G__13313 = cljs.core.chunk_rest.call(null,seq__13296_13311__$1);
var G__13314 = c__12265__auto___13312;
var G__13315 = cljs.core.count.call(null,c__12265__auto___13312);
var G__13316 = (0);
seq__13296_13301 = G__13313;
chunk__13297_13302 = G__13314;
count__13298_13303 = G__13315;
i__13299_13304 = G__13316;
continue;
}
} else
{var f_13317 = cljs.core.first.call(null,seq__13296_13311__$1);f_13317.call(null);
{
var G__13318 = cljs.core.next.call(null,seq__13296_13311__$1);
var G__13319 = null;
var G__13320 = (0);
var G__13321 = (0);
seq__13296_13301 = G__13318;
chunk__13297_13302 = G__13319;
count__13298_13303 = G__13320;
i__13299_13304 = G__13321;
continue;
}
}
} else
{}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13295_13300;
}return "Updated";
});
reagent.impl.util._not_found = (function (){var obj13323 = {};return obj13323;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){return (cljs.core.keyword_identical_QMARK_.call(null,x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type.call(null,x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){var or__11495__auto__ = (x === y);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var and__11483__auto__ = cljs.core.map_QMARK_.call(null,x);if(and__11483__auto__)
{var and__11483__auto____$1 = cljs.core.map_QMARK_.call(null,y);if(and__11483__auto____$1)
{var and__11483__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));if(and__11483__auto____$2)
{return cljs.core.reduce_kv.call(null,((function (and__11483__auto____$2,and__11483__auto____$1,and__11483__auto__,or__11495__auto__){
return (function (res,k,v){var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);if(cljs.core.truth_((function (){var or__11495__auto____$1 = (v === yv);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{var or__11495__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,yv);if(or__11495__auto____$2)
{return or__11495__auto____$2;
} else
{var and__11483__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736));if(and__11483__auto____$3)
{return shallow_equal_maps.call(null,v,yv);
} else
{return and__11483__auto____$3;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
});})(and__11483__auto____$2,and__11483__auto____$1,and__11483__auto__,or__11495__auto__))
,true,x);
} else
{return and__11483__auto____$2;
}
} else
{return and__11483__auto____$1;
}
} else
{return and__11483__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){if(cljs.core.vector_QMARK_.call(null,v1))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v1","v1",-2141311508,null)))))));
}
if(cljs.core.vector_QMARK_.call(null,v2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v2","v2",1875554983,null)))))));
}
var or__11495__auto__ = (v1 === v2);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var and__11483__auto__ = (cljs.core.count.call(null,v1) === cljs.core.count.call(null,v2));if(and__11483__auto__)
{return cljs.core.reduce_kv.call(null,((function (and__11483__auto__,or__11495__auto__){
return (function (res,k,v){var v_SINGLEQUOTE_ = cljs.core.nth.call(null,v2,k);if(cljs.core.truth_((function (){var or__11495__auto____$1 = (v === v_SINGLEQUOTE_);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{var or__11495__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,v_SINGLEQUOTE_);if(or__11495__auto____$2)
{return or__11495__auto____$2;
} else
{var and__11483__auto____$1 = cljs.core.map_QMARK_.call(null,v);if(and__11483__auto____$1)
{return reagent.impl.util.shallow_equal_maps.call(null,v,v_SINGLEQUOTE_);
} else
{return and__11483__auto____$1;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
});})(and__11483__auto__,or__11495__auto__))
,true,v1);
} else
{return and__11483__auto__;
}
}
});

//# sourceMappingURL=util.js.map