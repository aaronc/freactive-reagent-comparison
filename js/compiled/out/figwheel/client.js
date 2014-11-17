// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__18528,args){var map__18530 = p__18528;var map__18530__$1 = ((cljs.core.seq_QMARK_.call(null,map__18530))?cljs.core.apply.call(null,cljs.core.hash_map,map__18530):map__18530);var debug = cljs.core.get.call(null,map__18530__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__18528,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__18528,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__18531){
var p__18528 = cljs.core.first(arglist__18531);
var args = cljs.core.rest(arglist__18531);
return log__delegate(p__18528,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__18532){var map__18534 = p__18532;var map__18534__$1 = ((cljs.core.seq_QMARK_.call(null,map__18534))?cljs.core.apply.call(null,cljs.core.hash_map,map__18534):map__18534);var websocket_url = cljs.core.get.call(null,map__18534__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__18535,callback){var map__18537 = p__18535;var map__18537__$1 = ((cljs.core.seq_QMARK_.call(null,map__18537))?cljs.core.apply.call(null,cljs.core.hash_map,map__18537):map__18537);var msg = map__18537__$1;var dependency_file = cljs.core.get.call(null,map__18537__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__18537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__18537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11495__auto__ = dependency_file;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__18537,map__18537__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__18537,map__18537__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__18538,p__18539){var map__18542 = p__18538;var map__18542__$1 = ((cljs.core.seq_QMARK_.call(null,map__18542))?cljs.core.apply.call(null,cljs.core.hash_map,map__18542):map__18542);var opts = map__18542__$1;var url_rewriter = cljs.core.get.call(null,map__18542__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__18543 = p__18539;var map__18543__$1 = ((cljs.core.seq_QMARK_.call(null,map__18543))?cljs.core.apply.call(null,cljs.core.hash_map,map__18543):map__18543);var d = map__18543__$1;var file = cljs.core.get.call(null,map__18543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__18544,p__18545){var map__18587 = p__18544;var map__18587__$1 = ((cljs.core.seq_QMARK_.call(null,map__18587))?cljs.core.apply.call(null,cljs.core.hash_map,map__18587):map__18587);var opts = map__18587__$1;var on_jsload = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__18587__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__18588 = p__18545;var map__18588__$1 = ((cljs.core.seq_QMARK_.call(null,map__18588))?cljs.core.apply.call(null,cljs.core.hash_map,map__18588):map__18588);var files = cljs.core.get.call(null,map__18588__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__15530__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto__,map__18587,map__18587__$1,opts,on_jsload,before_jsload,map__18588,map__18588__$1,files){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto__,map__18587,map__18587__$1,opts,on_jsload,before_jsload,map__18588,map__18588__$1,files){
return (function (state_18611){var state_val_18612 = (state_18611[(1)]);if((state_val_18612 === (6)))
{var inst_18593 = (state_18611[(7)]);var inst_18602 = (state_18611[(2)]);var inst_18603 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18604 = [inst_18593];var inst_18605 = (new cljs.core.PersistentVector(null,1,(5),inst_18603,inst_18604,null));var inst_18606 = cljs.core.apply.call(null,on_jsload,inst_18605);var state_18611__$1 = (function (){var statearr_18613 = state_18611;(statearr_18613[(8)] = inst_18602);
return statearr_18613;
})();var statearr_18614_18628 = state_18611__$1;(statearr_18614_18628[(2)] = inst_18606);
(statearr_18614_18628[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18612 === (5)))
{var inst_18609 = (state_18611[(2)]);var state_18611__$1 = state_18611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18611__$1,inst_18609);
} else
{if((state_val_18612 === (4)))
{var state_18611__$1 = state_18611;var statearr_18615_18629 = state_18611__$1;(statearr_18615_18629[(2)] = null);
(statearr_18615_18629[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18612 === (3)))
{var inst_18593 = (state_18611[(7)]);var inst_18596 = console.debug("Figwheel: loaded these files");var inst_18597 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18593);var inst_18598 = cljs.core.prn_str.call(null,inst_18597);var inst_18599 = console.log(inst_18598);var inst_18600 = cljs.core.async.timeout.call(null,(10));var state_18611__$1 = (function (){var statearr_18616 = state_18611;(statearr_18616[(9)] = inst_18596);
(statearr_18616[(10)] = inst_18599);
return statearr_18616;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18611__$1,(6),inst_18600);
} else
{if((state_val_18612 === (2)))
{var inst_18593 = (state_18611[(7)]);var inst_18593__$1 = (state_18611[(2)]);var inst_18594 = cljs.core.not_empty.call(null,inst_18593__$1);var state_18611__$1 = (function (){var statearr_18617 = state_18611;(statearr_18617[(7)] = inst_18593__$1);
return statearr_18617;
})();if(cljs.core.truth_(inst_18594))
{var statearr_18618_18630 = state_18611__$1;(statearr_18618_18630[(1)] = (3));
} else
{var statearr_18619_18631 = state_18611__$1;(statearr_18619_18631[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18612 === (1)))
{var inst_18589 = before_jsload.call(null,files);var inst_18590 = figwheel.client.add_request_urls.call(null,opts,files);var inst_18591 = figwheel.client.load_all_js_files.call(null,inst_18590);var state_18611__$1 = (function (){var statearr_18620 = state_18611;(statearr_18620[(11)] = inst_18589);
return statearr_18620;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18611__$1,(2),inst_18591);
} else
{return null;
}
}
}
}
}
}
});})(c__15530__auto__,map__18587,map__18587__$1,opts,on_jsload,before_jsload,map__18588,map__18588__$1,files))
;return ((function (switch__15474__auto__,c__15530__auto__,map__18587,map__18587__$1,opts,on_jsload,before_jsload,map__18588,map__18588__$1,files){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_18624 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18624[(0)] = state_machine__15475__auto__);
(statearr_18624[(1)] = (1));
return statearr_18624;
});
var state_machine__15475__auto____1 = (function (state_18611){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_18611);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e18625){if((e18625 instanceof Object))
{var ex__15478__auto__ = e18625;var statearr_18626_18632 = state_18611;(statearr_18626_18632[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18625;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18633 = state_18611;
state_18611 = G__18633;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_18611){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_18611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto__,map__18587,map__18587__$1,opts,on_jsload,before_jsload,map__18588,map__18588__$1,files))
})();var state__15532__auto__ = (function (){var statearr_18627 = f__15531__auto__.call(null);(statearr_18627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto__);
return statearr_18627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto__,map__18587,map__18587__$1,opts,on_jsload,before_jsload,map__18588,map__18588__$1,files))
);
return c__15530__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__18634,link_href){var map__18636 = p__18634;var map__18636__$1 = ((cljs.core.seq_QMARK_.call(null,map__18636))?cljs.core.apply.call(null,cljs.core.hash_map,map__18636):map__18636);var request_url = cljs.core.get.call(null,map__18636__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__18636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__15530__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto__,parent){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto__,parent){
return (function (state_18657){var state_val_18658 = (state_18657[(1)]);if((state_val_18658 === (2)))
{var inst_18654 = (state_18657[(2)]);var inst_18655 = parent.removeChild(orig_link);var state_18657__$1 = (function (){var statearr_18659 = state_18657;(statearr_18659[(7)] = inst_18654);
return statearr_18659;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18657__$1,inst_18655);
} else
{if((state_val_18658 === (1)))
{var inst_18652 = cljs.core.async.timeout.call(null,(200));var state_18657__$1 = state_18657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18657__$1,(2),inst_18652);
} else
{return null;
}
}
});})(c__15530__auto__,parent))
;return ((function (switch__15474__auto__,c__15530__auto__,parent){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_18663 = [null,null,null,null,null,null,null,null];(statearr_18663[(0)] = state_machine__15475__auto__);
(statearr_18663[(1)] = (1));
return statearr_18663;
});
var state_machine__15475__auto____1 = (function (state_18657){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_18657);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e18664){if((e18664 instanceof Object))
{var ex__15478__auto__ = e18664;var statearr_18665_18667 = state_18657;(statearr_18665_18667[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18657);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18664;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18668 = state_18657;
state_18657 = G__18668;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_18657){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_18657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto__,parent))
})();var state__15532__auto__ = (function (){var statearr_18666 = f__15531__auto__.call(null);(statearr_18666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto__);
return statearr_18666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto__,parent))
);
return c__15530__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__18669){var map__18671 = p__18669;var map__18671__$1 = ((cljs.core.seq_QMARK_.call(null,map__18671))?cljs.core.apply.call(null,cljs.core.hash_map,map__18671):map__18671);var f_data = map__18671__$1;var request_url = cljs.core.get.call(null,map__18671__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__18671__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__18672,files_msg){var map__18694 = p__18672;var map__18694__$1 = ((cljs.core.seq_QMARK_.call(null,map__18694))?cljs.core.apply.call(null,cljs.core.hash_map,map__18694):map__18694);var opts = map__18694__$1;var on_cssload = cljs.core.get.call(null,map__18694__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__18695_18715 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__18696_18716 = null;var count__18697_18717 = (0);var i__18698_18718 = (0);while(true){
if((i__18698_18718 < count__18697_18717))
{var f_18719 = cljs.core._nth.call(null,chunk__18696_18716,i__18698_18718);figwheel.client.reload_css_file.call(null,f_18719);
{
var G__18720 = seq__18695_18715;
var G__18721 = chunk__18696_18716;
var G__18722 = count__18697_18717;
var G__18723 = (i__18698_18718 + (1));
seq__18695_18715 = G__18720;
chunk__18696_18716 = G__18721;
count__18697_18717 = G__18722;
i__18698_18718 = G__18723;
continue;
}
} else
{var temp__4126__auto___18724 = cljs.core.seq.call(null,seq__18695_18715);if(temp__4126__auto___18724)
{var seq__18695_18725__$1 = temp__4126__auto___18724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18695_18725__$1))
{var c__12265__auto___18726 = cljs.core.chunk_first.call(null,seq__18695_18725__$1);{
var G__18727 = cljs.core.chunk_rest.call(null,seq__18695_18725__$1);
var G__18728 = c__12265__auto___18726;
var G__18729 = cljs.core.count.call(null,c__12265__auto___18726);
var G__18730 = (0);
seq__18695_18715 = G__18727;
chunk__18696_18716 = G__18728;
count__18697_18717 = G__18729;
i__18698_18718 = G__18730;
continue;
}
} else
{var f_18731 = cljs.core.first.call(null,seq__18695_18725__$1);figwheel.client.reload_css_file.call(null,f_18731);
{
var G__18732 = cljs.core.next.call(null,seq__18695_18725__$1);
var G__18733 = null;
var G__18734 = (0);
var G__18735 = (0);
seq__18695_18715 = G__18732;
chunk__18696_18716 = G__18733;
count__18697_18717 = G__18734;
i__18698_18718 = G__18735;
continue;
}
}
} else
{}
}
break;
}
var c__15530__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto__,map__18694,map__18694__$1,opts,on_cssload){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto__,map__18694,map__18694__$1,opts,on_cssload){
return (function (state_18705){var state_val_18706 = (state_18705[(1)]);if((state_val_18706 === (2)))
{var inst_18701 = (state_18705[(2)]);var inst_18702 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_18703 = on_cssload.call(null,inst_18702);var state_18705__$1 = (function (){var statearr_18707 = state_18705;(statearr_18707[(7)] = inst_18701);
return statearr_18707;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18705__$1,inst_18703);
} else
{if((state_val_18706 === (1)))
{var inst_18699 = cljs.core.async.timeout.call(null,(100));var state_18705__$1 = state_18705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18705__$1,(2),inst_18699);
} else
{return null;
}
}
});})(c__15530__auto__,map__18694,map__18694__$1,opts,on_cssload))
;return ((function (switch__15474__auto__,c__15530__auto__,map__18694,map__18694__$1,opts,on_cssload){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_18711 = [null,null,null,null,null,null,null,null];(statearr_18711[(0)] = state_machine__15475__auto__);
(statearr_18711[(1)] = (1));
return statearr_18711;
});
var state_machine__15475__auto____1 = (function (state_18705){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_18705);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e18712){if((e18712 instanceof Object))
{var ex__15478__auto__ = e18712;var statearr_18713_18736 = state_18705;(statearr_18713_18736[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18705);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18712;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18737 = state_18705;
state_18705 = G__18737;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_18705){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_18705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto__,map__18694,map__18694__$1,opts,on_cssload))
})();var state__15532__auto__ = (function (){var statearr_18714 = f__15531__auto__.call(null);(statearr_18714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto__);
return statearr_18714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto__,map__18694,map__18694__$1,opts,on_cssload))
);
return c__15530__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__18738){var map__18743 = p__18738;var map__18743__$1 = ((cljs.core.seq_QMARK_.call(null,map__18743))?cljs.core.apply.call(null,cljs.core.hash_map,map__18743):map__18743);var opts = map__18743__$1;var on_compile_fail = cljs.core.get.call(null,map__18743__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__18743__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__18743__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__18743__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__18744 = cljs.core._EQ_;var expr__18745 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__18744.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__18745)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__18744.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__18745)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__18744.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__18745)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__18743,map__18743__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj18750 = {"detail":url};return obj18750;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__18751){var map__18753 = p__18751;var map__18753__$1 = ((cljs.core.seq_QMARK_.call(null,map__18753))?cljs.core.apply.call(null,cljs.core.hash_map,map__18753):map__18753);var class$ = cljs.core.get.call(null,map__18753__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__18753__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__18754){var map__18760 = p__18754;var map__18760__$1 = ((cljs.core.seq_QMARK_.call(null,map__18760))?cljs.core.apply.call(null,cljs.core.hash_map,map__18760):map__18760);var ed = map__18760__$1;var exception_data = cljs.core.get.call(null,map__18760__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__18760__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__18761_18765 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__18762_18766 = null;var count__18763_18767 = (0);var i__18764_18768 = (0);while(true){
if((i__18764_18768 < count__18763_18767))
{var msg_18769 = cljs.core._nth.call(null,chunk__18762_18766,i__18764_18768);console.log(msg_18769);
{
var G__18770 = seq__18761_18765;
var G__18771 = chunk__18762_18766;
var G__18772 = count__18763_18767;
var G__18773 = (i__18764_18768 + (1));
seq__18761_18765 = G__18770;
chunk__18762_18766 = G__18771;
count__18763_18767 = G__18772;
i__18764_18768 = G__18773;
continue;
}
} else
{var temp__4126__auto___18774 = cljs.core.seq.call(null,seq__18761_18765);if(temp__4126__auto___18774)
{var seq__18761_18775__$1 = temp__4126__auto___18774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18761_18775__$1))
{var c__12265__auto___18776 = cljs.core.chunk_first.call(null,seq__18761_18775__$1);{
var G__18777 = cljs.core.chunk_rest.call(null,seq__18761_18775__$1);
var G__18778 = c__12265__auto___18776;
var G__18779 = cljs.core.count.call(null,c__12265__auto___18776);
var G__18780 = (0);
seq__18761_18765 = G__18777;
chunk__18762_18766 = G__18778;
count__18763_18767 = G__18779;
i__18764_18768 = G__18780;
continue;
}
} else
{var msg_18781 = cljs.core.first.call(null,seq__18761_18775__$1);console.log(msg_18781);
{
var G__18782 = cljs.core.next.call(null,seq__18761_18775__$1);
var G__18783 = null;
var G__18784 = (0);
var G__18785 = (0);
seq__18761_18765 = G__18782;
chunk__18762_18766 = G__18783;
count__18763_18767 = G__18784;
i__18764_18768 = G__18785;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11495__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__18786){var map__18788 = p__18786;var map__18788__$1 = ((cljs.core.seq_QMARK_.call(null,map__18788))?cljs.core.apply.call(null,cljs.core.hash_map,map__18788):map__18788);var opts = map__18788__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__18786 = null;if (arguments.length > 0) {
  p__18786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__18786);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__18789){
var p__18786 = cljs.core.seq(arglist__18789);
return watch_and_reload__delegate(p__18786);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map