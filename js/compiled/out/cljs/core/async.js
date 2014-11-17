// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18904 = (function (f,fn_handler,meta18905){
this.f = f;
this.fn_handler = fn_handler;
this.meta18905 = meta18905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18904.cljs$lang$type = true;
cljs.core.async.t18904.cljs$lang$ctorStr = "cljs.core.async/t18904";
cljs.core.async.t18904.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18904");
});
cljs.core.async.t18904.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18906){var self__ = this;
var _18906__$1 = this;return self__.meta18905;
});
cljs.core.async.t18904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18906,meta18905__$1){var self__ = this;
var _18906__$1 = this;return (new cljs.core.async.t18904(self__.f,self__.fn_handler,meta18905__$1));
});
cljs.core.async.__GT_t18904 = (function __GT_t18904(f__$1,fn_handler__$1,meta18905){return (new cljs.core.async.t18904(f__$1,fn_handler__$1,meta18905));
});
}
return (new cljs.core.async.t18904(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18908 = buff;if(G__18908)
{var bit__12159__auto__ = null;if(cljs.core.truth_((function (){var or__11495__auto__ = bit__12159__auto__;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return G__18908.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18908.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18908);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18908);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_18909 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18909);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18909,ret){
return (function (){return fn1.call(null,val_18909);
});})(val_18909,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12365__auto___18910 = n;var x_18911 = (0);while(true){
if((x_18911 < n__12365__auto___18910))
{(a[x_18911] = (0));
{
var G__18912 = (x_18911 + (1));
x_18911 = G__18912;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__18913 = (i + (1));
i = G__18913;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18917 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18917 = (function (flag,alt_flag,meta18918){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18918 = meta18918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18917.cljs$lang$type = true;
cljs.core.async.t18917.cljs$lang$ctorStr = "cljs.core.async/t18917";
cljs.core.async.t18917.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18917");
});})(flag))
;
cljs.core.async.t18917.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18919){var self__ = this;
var _18919__$1 = this;return self__.meta18918;
});})(flag))
;
cljs.core.async.t18917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18919,meta18918__$1){var self__ = this;
var _18919__$1 = this;return (new cljs.core.async.t18917(self__.flag,self__.alt_flag,meta18918__$1));
});})(flag))
;
cljs.core.async.__GT_t18917 = ((function (flag){
return (function __GT_t18917(flag__$1,alt_flag__$1,meta18918){return (new cljs.core.async.t18917(flag__$1,alt_flag__$1,meta18918));
});})(flag))
;
}
return (new cljs.core.async.t18917(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18923 = (function (cb,flag,alt_handler,meta18924){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18924 = meta18924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18923.cljs$lang$type = true;
cljs.core.async.t18923.cljs$lang$ctorStr = "cljs.core.async/t18923";
cljs.core.async.t18923.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t18923");
});
cljs.core.async.t18923.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18925){var self__ = this;
var _18925__$1 = this;return self__.meta18924;
});
cljs.core.async.t18923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18925,meta18924__$1){var self__ = this;
var _18925__$1 = this;return (new cljs.core.async.t18923(self__.cb,self__.flag,self__.alt_handler,meta18924__$1));
});
cljs.core.async.__GT_t18923 = (function __GT_t18923(cb__$1,flag__$1,alt_handler__$1,meta18924){return (new cljs.core.async.t18923(cb__$1,flag__$1,alt_handler__$1,meta18924));
});
}
return (new cljs.core.async.t18923(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18926_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18926_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18927_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18927_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11495__auto__ = wport;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18928 = (i + (1));
i = G__18928;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11495__auto__ = ret;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__11483__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11483__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11483__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__18929){var map__18931 = p__18929;var map__18931__$1 = ((cljs.core.seq_QMARK_.call(null,map__18931))?cljs.core.apply.call(null,cljs.core.hash_map,map__18931):map__18931);var opts = map__18931__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18929 = null;if (arguments.length > 1) {
  p__18929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18929);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18932){
var ports = cljs.core.first(arglist__18932);
var p__18929 = cljs.core.rest(arglist__18932);
return alts_BANG___delegate(ports,p__18929);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__15530__auto___19027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___19027){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___19027){
return (function (state_19003){var state_val_19004 = (state_19003[(1)]);if((state_val_19004 === (7)))
{var inst_18999 = (state_19003[(2)]);var state_19003__$1 = state_19003;var statearr_19005_19028 = state_19003__$1;(statearr_19005_19028[(2)] = inst_18999);
(statearr_19005_19028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (1)))
{var state_19003__$1 = state_19003;var statearr_19006_19029 = state_19003__$1;(statearr_19006_19029[(2)] = null);
(statearr_19006_19029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (4)))
{var inst_18982 = (state_19003[(7)]);var inst_18982__$1 = (state_19003[(2)]);var inst_18983 = (inst_18982__$1 == null);var state_19003__$1 = (function (){var statearr_19007 = state_19003;(statearr_19007[(7)] = inst_18982__$1);
return statearr_19007;
})();if(cljs.core.truth_(inst_18983))
{var statearr_19008_19030 = state_19003__$1;(statearr_19008_19030[(1)] = (5));
} else
{var statearr_19009_19031 = state_19003__$1;(statearr_19009_19031[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (13)))
{var state_19003__$1 = state_19003;var statearr_19010_19032 = state_19003__$1;(statearr_19010_19032[(2)] = null);
(statearr_19010_19032[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (6)))
{var inst_18982 = (state_19003[(7)]);var state_19003__$1 = state_19003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19003__$1,(11),to,inst_18982);
} else
{if((state_val_19004 === (3)))
{var inst_19001 = (state_19003[(2)]);var state_19003__$1 = state_19003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19003__$1,inst_19001);
} else
{if((state_val_19004 === (12)))
{var state_19003__$1 = state_19003;var statearr_19011_19033 = state_19003__$1;(statearr_19011_19033[(2)] = null);
(statearr_19011_19033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (2)))
{var state_19003__$1 = state_19003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19003__$1,(4),from);
} else
{if((state_val_19004 === (11)))
{var inst_18992 = (state_19003[(2)]);var state_19003__$1 = state_19003;if(cljs.core.truth_(inst_18992))
{var statearr_19012_19034 = state_19003__$1;(statearr_19012_19034[(1)] = (12));
} else
{var statearr_19013_19035 = state_19003__$1;(statearr_19013_19035[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (9)))
{var state_19003__$1 = state_19003;var statearr_19014_19036 = state_19003__$1;(statearr_19014_19036[(2)] = null);
(statearr_19014_19036[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (5)))
{var state_19003__$1 = state_19003;if(cljs.core.truth_(close_QMARK_))
{var statearr_19015_19037 = state_19003__$1;(statearr_19015_19037[(1)] = (8));
} else
{var statearr_19016_19038 = state_19003__$1;(statearr_19016_19038[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (14)))
{var inst_18997 = (state_19003[(2)]);var state_19003__$1 = state_19003;var statearr_19017_19039 = state_19003__$1;(statearr_19017_19039[(2)] = inst_18997);
(statearr_19017_19039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (10)))
{var inst_18989 = (state_19003[(2)]);var state_19003__$1 = state_19003;var statearr_19018_19040 = state_19003__$1;(statearr_19018_19040[(2)] = inst_18989);
(statearr_19018_19040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19004 === (8)))
{var inst_18986 = cljs.core.async.close_BANG_.call(null,to);var state_19003__$1 = state_19003;var statearr_19019_19041 = state_19003__$1;(statearr_19019_19041[(2)] = inst_18986);
(statearr_19019_19041[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___19027))
;return ((function (switch__15474__auto__,c__15530__auto___19027){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19023 = [null,null,null,null,null,null,null,null];(statearr_19023[(0)] = state_machine__15475__auto__);
(statearr_19023[(1)] = (1));
return statearr_19023;
});
var state_machine__15475__auto____1 = (function (state_19003){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19003);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19024){if((e19024 instanceof Object))
{var ex__15478__auto__ = e19024;var statearr_19025_19042 = state_19003;(statearr_19025_19042[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19024;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19043 = state_19003;
state_19003 = G__19043;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19003){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___19027))
})();var state__15532__auto__ = (function (){var statearr_19026 = f__15531__auto__.call(null);(statearr_19026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___19027);
return statearr_19026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___19027))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__19227){var vec__19228 = p__19227;var v = cljs.core.nth.call(null,vec__19228,(0),null);var p = cljs.core.nth.call(null,vec__19228,(1),null);var job = vec__19228;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15530__auto___19410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___19410,res,vec__19228,v,p,job,jobs,results){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___19410,res,vec__19228,v,p,job,jobs,results){
return (function (state_19233){var state_val_19234 = (state_19233[(1)]);if((state_val_19234 === (2)))
{var inst_19230 = (state_19233[(2)]);var inst_19231 = cljs.core.async.close_BANG_.call(null,res);var state_19233__$1 = (function (){var statearr_19235 = state_19233;(statearr_19235[(7)] = inst_19230);
return statearr_19235;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19233__$1,inst_19231);
} else
{if((state_val_19234 === (1)))
{var state_19233__$1 = state_19233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19233__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15530__auto___19410,res,vec__19228,v,p,job,jobs,results))
;return ((function (switch__15474__auto__,c__15530__auto___19410,res,vec__19228,v,p,job,jobs,results){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19239 = [null,null,null,null,null,null,null,null];(statearr_19239[(0)] = state_machine__15475__auto__);
(statearr_19239[(1)] = (1));
return statearr_19239;
});
var state_machine__15475__auto____1 = (function (state_19233){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19233);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19240){if((e19240 instanceof Object))
{var ex__15478__auto__ = e19240;var statearr_19241_19411 = state_19233;(statearr_19241_19411[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19412 = state_19233;
state_19233 = G__19412;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19233){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___19410,res,vec__19228,v,p,job,jobs,results))
})();var state__15532__auto__ = (function (){var statearr_19242 = f__15531__auto__.call(null);(statearr_19242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___19410);
return statearr_19242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___19410,res,vec__19228,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__19243){var vec__19244 = p__19243;var v = cljs.core.nth.call(null,vec__19244,(0),null);var p = cljs.core.nth.call(null,vec__19244,(1),null);var job = vec__19244;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12365__auto___19413 = n;var __19414 = (0);while(true){
if((__19414 < n__12365__auto___19413))
{var G__19245_19415 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__19245_19415) {
case "async":
var c__15530__auto___19417 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19414,c__15530__auto___19417,G__19245_19415,n__12365__auto___19413,jobs,results,process,async){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (__19414,c__15530__auto___19417,G__19245_19415,n__12365__auto___19413,jobs,results,process,async){
return (function (state_19258){var state_val_19259 = (state_19258[(1)]);if((state_val_19259 === (7)))
{var inst_19254 = (state_19258[(2)]);var state_19258__$1 = state_19258;var statearr_19260_19418 = state_19258__$1;(statearr_19260_19418[(2)] = inst_19254);
(statearr_19260_19418[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19259 === (6)))
{var state_19258__$1 = state_19258;var statearr_19261_19419 = state_19258__$1;(statearr_19261_19419[(2)] = null);
(statearr_19261_19419[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19259 === (5)))
{var state_19258__$1 = state_19258;var statearr_19262_19420 = state_19258__$1;(statearr_19262_19420[(2)] = null);
(statearr_19262_19420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19259 === (4)))
{var inst_19248 = (state_19258[(2)]);var inst_19249 = async.call(null,inst_19248);var state_19258__$1 = state_19258;if(cljs.core.truth_(inst_19249))
{var statearr_19263_19421 = state_19258__$1;(statearr_19263_19421[(1)] = (5));
} else
{var statearr_19264_19422 = state_19258__$1;(statearr_19264_19422[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19259 === (3)))
{var inst_19256 = (state_19258[(2)]);var state_19258__$1 = state_19258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19258__$1,inst_19256);
} else
{if((state_val_19259 === (2)))
{var state_19258__$1 = state_19258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19258__$1,(4),jobs);
} else
{if((state_val_19259 === (1)))
{var state_19258__$1 = state_19258;var statearr_19265_19423 = state_19258__$1;(statearr_19265_19423[(2)] = null);
(statearr_19265_19423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__19414,c__15530__auto___19417,G__19245_19415,n__12365__auto___19413,jobs,results,process,async))
;return ((function (__19414,switch__15474__auto__,c__15530__auto___19417,G__19245_19415,n__12365__auto___19413,jobs,results,process,async){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19269 = [null,null,null,null,null,null,null];(statearr_19269[(0)] = state_machine__15475__auto__);
(statearr_19269[(1)] = (1));
return statearr_19269;
});
var state_machine__15475__auto____1 = (function (state_19258){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19258);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19270){if((e19270 instanceof Object))
{var ex__15478__auto__ = e19270;var statearr_19271_19424 = state_19258;(statearr_19271_19424[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19270;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19425 = state_19258;
state_19258 = G__19425;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19258){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(__19414,switch__15474__auto__,c__15530__auto___19417,G__19245_19415,n__12365__auto___19413,jobs,results,process,async))
})();var state__15532__auto__ = (function (){var statearr_19272 = f__15531__auto__.call(null);(statearr_19272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___19417);
return statearr_19272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(__19414,c__15530__auto___19417,G__19245_19415,n__12365__auto___19413,jobs,results,process,async))
);

break;
case "compute":
var c__15530__auto___19426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19414,c__15530__auto___19426,G__19245_19415,n__12365__auto___19413,jobs,results,process,async){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (__19414,c__15530__auto___19426,G__19245_19415,n__12365__auto___19413,jobs,results,process,async){
return (function (state_19285){var state_val_19286 = (state_19285[(1)]);if((state_val_19286 === (7)))
{var inst_19281 = (state_19285[(2)]);var state_19285__$1 = state_19285;var statearr_19287_19427 = state_19285__$1;(statearr_19287_19427[(2)] = inst_19281);
(statearr_19287_19427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19286 === (6)))
{var state_19285__$1 = state_19285;var statearr_19288_19428 = state_19285__$1;(statearr_19288_19428[(2)] = null);
(statearr_19288_19428[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19286 === (5)))
{var state_19285__$1 = state_19285;var statearr_19289_19429 = state_19285__$1;(statearr_19289_19429[(2)] = null);
(statearr_19289_19429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19286 === (4)))
{var inst_19275 = (state_19285[(2)]);var inst_19276 = process.call(null,inst_19275);var state_19285__$1 = state_19285;if(cljs.core.truth_(inst_19276))
{var statearr_19290_19430 = state_19285__$1;(statearr_19290_19430[(1)] = (5));
} else
{var statearr_19291_19431 = state_19285__$1;(statearr_19291_19431[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19286 === (3)))
{var inst_19283 = (state_19285[(2)]);var state_19285__$1 = state_19285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19285__$1,inst_19283);
} else
{if((state_val_19286 === (2)))
{var state_19285__$1 = state_19285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19285__$1,(4),jobs);
} else
{if((state_val_19286 === (1)))
{var state_19285__$1 = state_19285;var statearr_19292_19432 = state_19285__$1;(statearr_19292_19432[(2)] = null);
(statearr_19292_19432[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__19414,c__15530__auto___19426,G__19245_19415,n__12365__auto___19413,jobs,results,process,async))
;return ((function (__19414,switch__15474__auto__,c__15530__auto___19426,G__19245_19415,n__12365__auto___19413,jobs,results,process,async){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19296 = [null,null,null,null,null,null,null];(statearr_19296[(0)] = state_machine__15475__auto__);
(statearr_19296[(1)] = (1));
return statearr_19296;
});
var state_machine__15475__auto____1 = (function (state_19285){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19285);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19297){if((e19297 instanceof Object))
{var ex__15478__auto__ = e19297;var statearr_19298_19433 = state_19285;(statearr_19298_19433[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19434 = state_19285;
state_19285 = G__19434;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19285){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(__19414,switch__15474__auto__,c__15530__auto___19426,G__19245_19415,n__12365__auto___19413,jobs,results,process,async))
})();var state__15532__auto__ = (function (){var statearr_19299 = f__15531__auto__.call(null);(statearr_19299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___19426);
return statearr_19299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(__19414,c__15530__auto___19426,G__19245_19415,n__12365__auto___19413,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__19435 = (__19414 + (1));
__19414 = G__19435;
continue;
}
} else
{}
break;
}
var c__15530__auto___19436 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___19436,jobs,results,process,async){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___19436,jobs,results,process,async){
return (function (state_19321){var state_val_19322 = (state_19321[(1)]);if((state_val_19322 === (9)))
{var inst_19314 = (state_19321[(2)]);var state_19321__$1 = (function (){var statearr_19323 = state_19321;(statearr_19323[(7)] = inst_19314);
return statearr_19323;
})();var statearr_19324_19437 = state_19321__$1;(statearr_19324_19437[(2)] = null);
(statearr_19324_19437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19322 === (8)))
{var inst_19307 = (state_19321[(8)]);var inst_19312 = (state_19321[(2)]);var state_19321__$1 = (function (){var statearr_19325 = state_19321;(statearr_19325[(9)] = inst_19312);
return statearr_19325;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19321__$1,(9),results,inst_19307);
} else
{if((state_val_19322 === (7)))
{var inst_19317 = (state_19321[(2)]);var state_19321__$1 = state_19321;var statearr_19326_19438 = state_19321__$1;(statearr_19326_19438[(2)] = inst_19317);
(statearr_19326_19438[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19322 === (6)))
{var inst_19302 = (state_19321[(10)]);var inst_19307 = (state_19321[(8)]);var inst_19307__$1 = cljs.core.async.chan.call(null,(1));var inst_19308 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19309 = [inst_19302,inst_19307__$1];var inst_19310 = (new cljs.core.PersistentVector(null,2,(5),inst_19308,inst_19309,null));var state_19321__$1 = (function (){var statearr_19327 = state_19321;(statearr_19327[(8)] = inst_19307__$1);
return statearr_19327;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19321__$1,(8),jobs,inst_19310);
} else
{if((state_val_19322 === (5)))
{var inst_19305 = cljs.core.async.close_BANG_.call(null,jobs);var state_19321__$1 = state_19321;var statearr_19328_19439 = state_19321__$1;(statearr_19328_19439[(2)] = inst_19305);
(statearr_19328_19439[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19322 === (4)))
{var inst_19302 = (state_19321[(10)]);var inst_19302__$1 = (state_19321[(2)]);var inst_19303 = (inst_19302__$1 == null);var state_19321__$1 = (function (){var statearr_19329 = state_19321;(statearr_19329[(10)] = inst_19302__$1);
return statearr_19329;
})();if(cljs.core.truth_(inst_19303))
{var statearr_19330_19440 = state_19321__$1;(statearr_19330_19440[(1)] = (5));
} else
{var statearr_19331_19441 = state_19321__$1;(statearr_19331_19441[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19322 === (3)))
{var inst_19319 = (state_19321[(2)]);var state_19321__$1 = state_19321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19321__$1,inst_19319);
} else
{if((state_val_19322 === (2)))
{var state_19321__$1 = state_19321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19321__$1,(4),from);
} else
{if((state_val_19322 === (1)))
{var state_19321__$1 = state_19321;var statearr_19332_19442 = state_19321__$1;(statearr_19332_19442[(2)] = null);
(statearr_19332_19442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___19436,jobs,results,process,async))
;return ((function (switch__15474__auto__,c__15530__auto___19436,jobs,results,process,async){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19336 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19336[(0)] = state_machine__15475__auto__);
(statearr_19336[(1)] = (1));
return statearr_19336;
});
var state_machine__15475__auto____1 = (function (state_19321){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19321);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19337){if((e19337 instanceof Object))
{var ex__15478__auto__ = e19337;var statearr_19338_19443 = state_19321;(statearr_19338_19443[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19337;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19444 = state_19321;
state_19321 = G__19444;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19321){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___19436,jobs,results,process,async))
})();var state__15532__auto__ = (function (){var statearr_19339 = f__15531__auto__.call(null);(statearr_19339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___19436);
return statearr_19339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___19436,jobs,results,process,async))
);
var c__15530__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto__,jobs,results,process,async){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto__,jobs,results,process,async){
return (function (state_19377){var state_val_19378 = (state_19377[(1)]);if((state_val_19378 === (7)))
{var inst_19373 = (state_19377[(2)]);var state_19377__$1 = state_19377;var statearr_19379_19445 = state_19377__$1;(statearr_19379_19445[(2)] = inst_19373);
(statearr_19379_19445[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (20)))
{var state_19377__$1 = state_19377;var statearr_19380_19446 = state_19377__$1;(statearr_19380_19446[(2)] = null);
(statearr_19380_19446[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (1)))
{var state_19377__$1 = state_19377;var statearr_19381_19447 = state_19377__$1;(statearr_19381_19447[(2)] = null);
(statearr_19381_19447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (4)))
{var inst_19342 = (state_19377[(7)]);var inst_19342__$1 = (state_19377[(2)]);var inst_19343 = (inst_19342__$1 == null);var state_19377__$1 = (function (){var statearr_19382 = state_19377;(statearr_19382[(7)] = inst_19342__$1);
return statearr_19382;
})();if(cljs.core.truth_(inst_19343))
{var statearr_19383_19448 = state_19377__$1;(statearr_19383_19448[(1)] = (5));
} else
{var statearr_19384_19449 = state_19377__$1;(statearr_19384_19449[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (15)))
{var inst_19355 = (state_19377[(8)]);var state_19377__$1 = state_19377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19377__$1,(18),to,inst_19355);
} else
{if((state_val_19378 === (21)))
{var inst_19368 = (state_19377[(2)]);var state_19377__$1 = state_19377;var statearr_19385_19450 = state_19377__$1;(statearr_19385_19450[(2)] = inst_19368);
(statearr_19385_19450[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (13)))
{var inst_19370 = (state_19377[(2)]);var state_19377__$1 = (function (){var statearr_19386 = state_19377;(statearr_19386[(9)] = inst_19370);
return statearr_19386;
})();var statearr_19387_19451 = state_19377__$1;(statearr_19387_19451[(2)] = null);
(statearr_19387_19451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (6)))
{var inst_19342 = (state_19377[(7)]);var state_19377__$1 = state_19377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19377__$1,(11),inst_19342);
} else
{if((state_val_19378 === (17)))
{var inst_19363 = (state_19377[(2)]);var state_19377__$1 = state_19377;if(cljs.core.truth_(inst_19363))
{var statearr_19388_19452 = state_19377__$1;(statearr_19388_19452[(1)] = (19));
} else
{var statearr_19389_19453 = state_19377__$1;(statearr_19389_19453[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (3)))
{var inst_19375 = (state_19377[(2)]);var state_19377__$1 = state_19377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19377__$1,inst_19375);
} else
{if((state_val_19378 === (12)))
{var inst_19352 = (state_19377[(10)]);var state_19377__$1 = state_19377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19377__$1,(14),inst_19352);
} else
{if((state_val_19378 === (2)))
{var state_19377__$1 = state_19377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19377__$1,(4),results);
} else
{if((state_val_19378 === (19)))
{var state_19377__$1 = state_19377;var statearr_19390_19454 = state_19377__$1;(statearr_19390_19454[(2)] = null);
(statearr_19390_19454[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (11)))
{var inst_19352 = (state_19377[(2)]);var state_19377__$1 = (function (){var statearr_19391 = state_19377;(statearr_19391[(10)] = inst_19352);
return statearr_19391;
})();var statearr_19392_19455 = state_19377__$1;(statearr_19392_19455[(2)] = null);
(statearr_19392_19455[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (9)))
{var state_19377__$1 = state_19377;var statearr_19393_19456 = state_19377__$1;(statearr_19393_19456[(2)] = null);
(statearr_19393_19456[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (5)))
{var state_19377__$1 = state_19377;if(cljs.core.truth_(close_QMARK_))
{var statearr_19394_19457 = state_19377__$1;(statearr_19394_19457[(1)] = (8));
} else
{var statearr_19395_19458 = state_19377__$1;(statearr_19395_19458[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (14)))
{var inst_19355 = (state_19377[(8)]);var inst_19357 = (state_19377[(11)]);var inst_19355__$1 = (state_19377[(2)]);var inst_19356 = (inst_19355__$1 == null);var inst_19357__$1 = cljs.core.not.call(null,inst_19356);var state_19377__$1 = (function (){var statearr_19396 = state_19377;(statearr_19396[(8)] = inst_19355__$1);
(statearr_19396[(11)] = inst_19357__$1);
return statearr_19396;
})();if(inst_19357__$1)
{var statearr_19397_19459 = state_19377__$1;(statearr_19397_19459[(1)] = (15));
} else
{var statearr_19398_19460 = state_19377__$1;(statearr_19398_19460[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (16)))
{var inst_19357 = (state_19377[(11)]);var state_19377__$1 = state_19377;var statearr_19399_19461 = state_19377__$1;(statearr_19399_19461[(2)] = inst_19357);
(statearr_19399_19461[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (10)))
{var inst_19349 = (state_19377[(2)]);var state_19377__$1 = state_19377;var statearr_19400_19462 = state_19377__$1;(statearr_19400_19462[(2)] = inst_19349);
(statearr_19400_19462[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (18)))
{var inst_19360 = (state_19377[(2)]);var state_19377__$1 = state_19377;var statearr_19401_19463 = state_19377__$1;(statearr_19401_19463[(2)] = inst_19360);
(statearr_19401_19463[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19378 === (8)))
{var inst_19346 = cljs.core.async.close_BANG_.call(null,to);var state_19377__$1 = state_19377;var statearr_19402_19464 = state_19377__$1;(statearr_19402_19464[(2)] = inst_19346);
(statearr_19402_19464[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto__,jobs,results,process,async))
;return ((function (switch__15474__auto__,c__15530__auto__,jobs,results,process,async){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19406 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19406[(0)] = state_machine__15475__auto__);
(statearr_19406[(1)] = (1));
return statearr_19406;
});
var state_machine__15475__auto____1 = (function (state_19377){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19377);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19407){if((e19407 instanceof Object))
{var ex__15478__auto__ = e19407;var statearr_19408_19465 = state_19377;(statearr_19408_19465[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19466 = state_19377;
state_19377 = G__19466;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19377){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto__,jobs,results,process,async))
})();var state__15532__auto__ = (function (){var statearr_19409 = f__15531__auto__.call(null);(statearr_19409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto__);
return statearr_19409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto__,jobs,results,process,async))
);
return c__15530__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15530__auto___19567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___19567,tc,fc){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___19567,tc,fc){
return (function (state_19542){var state_val_19543 = (state_19542[(1)]);if((state_val_19543 === (7)))
{var inst_19538 = (state_19542[(2)]);var state_19542__$1 = state_19542;var statearr_19544_19568 = state_19542__$1;(statearr_19544_19568[(2)] = inst_19538);
(statearr_19544_19568[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (1)))
{var state_19542__$1 = state_19542;var statearr_19545_19569 = state_19542__$1;(statearr_19545_19569[(2)] = null);
(statearr_19545_19569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (4)))
{var inst_19519 = (state_19542[(7)]);var inst_19519__$1 = (state_19542[(2)]);var inst_19520 = (inst_19519__$1 == null);var state_19542__$1 = (function (){var statearr_19546 = state_19542;(statearr_19546[(7)] = inst_19519__$1);
return statearr_19546;
})();if(cljs.core.truth_(inst_19520))
{var statearr_19547_19570 = state_19542__$1;(statearr_19547_19570[(1)] = (5));
} else
{var statearr_19548_19571 = state_19542__$1;(statearr_19548_19571[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (13)))
{var state_19542__$1 = state_19542;var statearr_19549_19572 = state_19542__$1;(statearr_19549_19572[(2)] = null);
(statearr_19549_19572[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (6)))
{var inst_19519 = (state_19542[(7)]);var inst_19525 = p.call(null,inst_19519);var state_19542__$1 = state_19542;if(cljs.core.truth_(inst_19525))
{var statearr_19550_19573 = state_19542__$1;(statearr_19550_19573[(1)] = (9));
} else
{var statearr_19551_19574 = state_19542__$1;(statearr_19551_19574[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (3)))
{var inst_19540 = (state_19542[(2)]);var state_19542__$1 = state_19542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19542__$1,inst_19540);
} else
{if((state_val_19543 === (12)))
{var state_19542__$1 = state_19542;var statearr_19552_19575 = state_19542__$1;(statearr_19552_19575[(2)] = null);
(statearr_19552_19575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (2)))
{var state_19542__$1 = state_19542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19542__$1,(4),ch);
} else
{if((state_val_19543 === (11)))
{var inst_19519 = (state_19542[(7)]);var inst_19529 = (state_19542[(2)]);var state_19542__$1 = state_19542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19542__$1,(8),inst_19529,inst_19519);
} else
{if((state_val_19543 === (9)))
{var state_19542__$1 = state_19542;var statearr_19553_19576 = state_19542__$1;(statearr_19553_19576[(2)] = tc);
(statearr_19553_19576[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (5)))
{var inst_19522 = cljs.core.async.close_BANG_.call(null,tc);var inst_19523 = cljs.core.async.close_BANG_.call(null,fc);var state_19542__$1 = (function (){var statearr_19554 = state_19542;(statearr_19554[(8)] = inst_19522);
return statearr_19554;
})();var statearr_19555_19577 = state_19542__$1;(statearr_19555_19577[(2)] = inst_19523);
(statearr_19555_19577[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (14)))
{var inst_19536 = (state_19542[(2)]);var state_19542__$1 = state_19542;var statearr_19556_19578 = state_19542__$1;(statearr_19556_19578[(2)] = inst_19536);
(statearr_19556_19578[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (10)))
{var state_19542__$1 = state_19542;var statearr_19557_19579 = state_19542__$1;(statearr_19557_19579[(2)] = fc);
(statearr_19557_19579[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19543 === (8)))
{var inst_19531 = (state_19542[(2)]);var state_19542__$1 = state_19542;if(cljs.core.truth_(inst_19531))
{var statearr_19558_19580 = state_19542__$1;(statearr_19558_19580[(1)] = (12));
} else
{var statearr_19559_19581 = state_19542__$1;(statearr_19559_19581[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___19567,tc,fc))
;return ((function (switch__15474__auto__,c__15530__auto___19567,tc,fc){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19563 = [null,null,null,null,null,null,null,null,null];(statearr_19563[(0)] = state_machine__15475__auto__);
(statearr_19563[(1)] = (1));
return statearr_19563;
});
var state_machine__15475__auto____1 = (function (state_19542){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19542);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19564){if((e19564 instanceof Object))
{var ex__15478__auto__ = e19564;var statearr_19565_19582 = state_19542;(statearr_19565_19582[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19583 = state_19542;
state_19542 = G__19583;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19542){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___19567,tc,fc))
})();var state__15532__auto__ = (function (){var statearr_19566 = f__15531__auto__.call(null);(statearr_19566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___19567);
return statearr_19566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___19567,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15530__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto__){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto__){
return (function (state_19630){var state_val_19631 = (state_19630[(1)]);if((state_val_19631 === (7)))
{var inst_19626 = (state_19630[(2)]);var state_19630__$1 = state_19630;var statearr_19632_19648 = state_19630__$1;(statearr_19632_19648[(2)] = inst_19626);
(statearr_19632_19648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19631 === (6)))
{var inst_19616 = (state_19630[(7)]);var inst_19619 = (state_19630[(8)]);var inst_19623 = f.call(null,inst_19616,inst_19619);var inst_19616__$1 = inst_19623;var state_19630__$1 = (function (){var statearr_19633 = state_19630;(statearr_19633[(7)] = inst_19616__$1);
return statearr_19633;
})();var statearr_19634_19649 = state_19630__$1;(statearr_19634_19649[(2)] = null);
(statearr_19634_19649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19631 === (5)))
{var inst_19616 = (state_19630[(7)]);var state_19630__$1 = state_19630;var statearr_19635_19650 = state_19630__$1;(statearr_19635_19650[(2)] = inst_19616);
(statearr_19635_19650[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19631 === (4)))
{var inst_19619 = (state_19630[(8)]);var inst_19619__$1 = (state_19630[(2)]);var inst_19620 = (inst_19619__$1 == null);var state_19630__$1 = (function (){var statearr_19636 = state_19630;(statearr_19636[(8)] = inst_19619__$1);
return statearr_19636;
})();if(cljs.core.truth_(inst_19620))
{var statearr_19637_19651 = state_19630__$1;(statearr_19637_19651[(1)] = (5));
} else
{var statearr_19638_19652 = state_19630__$1;(statearr_19638_19652[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19631 === (3)))
{var inst_19628 = (state_19630[(2)]);var state_19630__$1 = state_19630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19630__$1,inst_19628);
} else
{if((state_val_19631 === (2)))
{var state_19630__$1 = state_19630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19630__$1,(4),ch);
} else
{if((state_val_19631 === (1)))
{var inst_19616 = init;var state_19630__$1 = (function (){var statearr_19639 = state_19630;(statearr_19639[(7)] = inst_19616);
return statearr_19639;
})();var statearr_19640_19653 = state_19630__$1;(statearr_19640_19653[(2)] = null);
(statearr_19640_19653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__15530__auto__))
;return ((function (switch__15474__auto__,c__15530__auto__){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19644 = [null,null,null,null,null,null,null,null,null];(statearr_19644[(0)] = state_machine__15475__auto__);
(statearr_19644[(1)] = (1));
return statearr_19644;
});
var state_machine__15475__auto____1 = (function (state_19630){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19630);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19645){if((e19645 instanceof Object))
{var ex__15478__auto__ = e19645;var statearr_19646_19654 = state_19630;(statearr_19646_19654[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19655 = state_19630;
state_19630 = G__19655;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19630){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto__))
})();var state__15532__auto__ = (function (){var statearr_19647 = f__15531__auto__.call(null);(statearr_19647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto__);
return statearr_19647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto__))
);
return c__15530__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15530__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto__){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto__){
return (function (state_19729){var state_val_19730 = (state_19729[(1)]);if((state_val_19730 === (7)))
{var inst_19711 = (state_19729[(2)]);var state_19729__$1 = state_19729;var statearr_19731_19754 = state_19729__$1;(statearr_19731_19754[(2)] = inst_19711);
(statearr_19731_19754[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (1)))
{var inst_19705 = cljs.core.seq.call(null,coll);var inst_19706 = inst_19705;var state_19729__$1 = (function (){var statearr_19732 = state_19729;(statearr_19732[(7)] = inst_19706);
return statearr_19732;
})();var statearr_19733_19755 = state_19729__$1;(statearr_19733_19755[(2)] = null);
(statearr_19733_19755[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (4)))
{var inst_19706 = (state_19729[(7)]);var inst_19709 = cljs.core.first.call(null,inst_19706);var state_19729__$1 = state_19729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19729__$1,(7),ch,inst_19709);
} else
{if((state_val_19730 === (13)))
{var inst_19723 = (state_19729[(2)]);var state_19729__$1 = state_19729;var statearr_19734_19756 = state_19729__$1;(statearr_19734_19756[(2)] = inst_19723);
(statearr_19734_19756[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (6)))
{var inst_19714 = (state_19729[(2)]);var state_19729__$1 = state_19729;if(cljs.core.truth_(inst_19714))
{var statearr_19735_19757 = state_19729__$1;(statearr_19735_19757[(1)] = (8));
} else
{var statearr_19736_19758 = state_19729__$1;(statearr_19736_19758[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (3)))
{var inst_19727 = (state_19729[(2)]);var state_19729__$1 = state_19729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19729__$1,inst_19727);
} else
{if((state_val_19730 === (12)))
{var state_19729__$1 = state_19729;var statearr_19737_19759 = state_19729__$1;(statearr_19737_19759[(2)] = null);
(statearr_19737_19759[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (2)))
{var inst_19706 = (state_19729[(7)]);var state_19729__$1 = state_19729;if(cljs.core.truth_(inst_19706))
{var statearr_19738_19760 = state_19729__$1;(statearr_19738_19760[(1)] = (4));
} else
{var statearr_19739_19761 = state_19729__$1;(statearr_19739_19761[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (11)))
{var inst_19720 = cljs.core.async.close_BANG_.call(null,ch);var state_19729__$1 = state_19729;var statearr_19740_19762 = state_19729__$1;(statearr_19740_19762[(2)] = inst_19720);
(statearr_19740_19762[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (9)))
{var state_19729__$1 = state_19729;if(cljs.core.truth_(close_QMARK_))
{var statearr_19741_19763 = state_19729__$1;(statearr_19741_19763[(1)] = (11));
} else
{var statearr_19742_19764 = state_19729__$1;(statearr_19742_19764[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (5)))
{var inst_19706 = (state_19729[(7)]);var state_19729__$1 = state_19729;var statearr_19743_19765 = state_19729__$1;(statearr_19743_19765[(2)] = inst_19706);
(statearr_19743_19765[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (10)))
{var inst_19725 = (state_19729[(2)]);var state_19729__$1 = state_19729;var statearr_19744_19766 = state_19729__$1;(statearr_19744_19766[(2)] = inst_19725);
(statearr_19744_19766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19730 === (8)))
{var inst_19706 = (state_19729[(7)]);var inst_19716 = cljs.core.next.call(null,inst_19706);var inst_19706__$1 = inst_19716;var state_19729__$1 = (function (){var statearr_19745 = state_19729;(statearr_19745[(7)] = inst_19706__$1);
return statearr_19745;
})();var statearr_19746_19767 = state_19729__$1;(statearr_19746_19767[(2)] = null);
(statearr_19746_19767[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto__))
;return ((function (switch__15474__auto__,c__15530__auto__){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_19750 = [null,null,null,null,null,null,null,null];(statearr_19750[(0)] = state_machine__15475__auto__);
(statearr_19750[(1)] = (1));
return statearr_19750;
});
var state_machine__15475__auto____1 = (function (state_19729){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_19729);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e19751){if((e19751 instanceof Object))
{var ex__15478__auto__ = e19751;var statearr_19752_19768 = state_19729;(statearr_19752_19768[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19751;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19769 = state_19729;
state_19729 = G__19769;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_19729){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_19729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto__))
})();var state__15532__auto__ = (function (){var statearr_19753 = f__15531__auto__.call(null);(statearr_19753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto__);
return statearr_19753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto__))
);
return c__15530__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj19771 = {};return obj19771;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11483__auto__ = _;if(and__11483__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12132__auto__ = (((_ == null))?null:_);return (function (){var or__11495__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19773 = {};return obj19773;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19995 = (function (cs,ch,mult,meta19996){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19996 = meta19996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19995.cljs$lang$type = true;
cljs.core.async.t19995.cljs$lang$ctorStr = "cljs.core.async/t19995";
cljs.core.async.t19995.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t19995");
});})(cs))
;
cljs.core.async.t19995.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19995.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19995.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19995.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19995.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19997){var self__ = this;
var _19997__$1 = this;return self__.meta19996;
});})(cs))
;
cljs.core.async.t19995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19997,meta19996__$1){var self__ = this;
var _19997__$1 = this;return (new cljs.core.async.t19995(self__.cs,self__.ch,self__.mult,meta19996__$1));
});})(cs))
;
cljs.core.async.__GT_t19995 = ((function (cs){
return (function __GT_t19995(cs__$1,ch__$1,mult__$1,meta19996){return (new cljs.core.async.t19995(cs__$1,ch__$1,mult__$1,meta19996));
});})(cs))
;
}
return (new cljs.core.async.t19995(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15530__auto___20216 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___20216,cs,m,dchan,dctr,done){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___20216,cs,m,dchan,dctr,done){
return (function (state_20128){var state_val_20129 = (state_20128[(1)]);if((state_val_20129 === (7)))
{var inst_20124 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20130_20217 = state_20128__$1;(statearr_20130_20217[(2)] = inst_20124);
(statearr_20130_20217[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (20)))
{var inst_20029 = (state_20128[(7)]);var inst_20039 = cljs.core.first.call(null,inst_20029);var inst_20040 = cljs.core.nth.call(null,inst_20039,(0),null);var inst_20041 = cljs.core.nth.call(null,inst_20039,(1),null);var state_20128__$1 = (function (){var statearr_20131 = state_20128;(statearr_20131[(8)] = inst_20040);
return statearr_20131;
})();if(cljs.core.truth_(inst_20041))
{var statearr_20132_20218 = state_20128__$1;(statearr_20132_20218[(1)] = (22));
} else
{var statearr_20133_20219 = state_20128__$1;(statearr_20133_20219[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (27)))
{var inst_20071 = (state_20128[(9)]);var inst_20076 = (state_20128[(10)]);var inst_20000 = (state_20128[(11)]);var inst_20069 = (state_20128[(12)]);var inst_20076__$1 = cljs.core._nth.call(null,inst_20069,inst_20071);var inst_20077 = cljs.core.async.put_BANG_.call(null,inst_20076__$1,inst_20000,done);var state_20128__$1 = (function (){var statearr_20134 = state_20128;(statearr_20134[(10)] = inst_20076__$1);
return statearr_20134;
})();if(cljs.core.truth_(inst_20077))
{var statearr_20135_20220 = state_20128__$1;(statearr_20135_20220[(1)] = (30));
} else
{var statearr_20136_20221 = state_20128__$1;(statearr_20136_20221[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (1)))
{var state_20128__$1 = state_20128;var statearr_20137_20222 = state_20128__$1;(statearr_20137_20222[(2)] = null);
(statearr_20137_20222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (24)))
{var inst_20029 = (state_20128[(7)]);var inst_20046 = (state_20128[(2)]);var inst_20047 = cljs.core.next.call(null,inst_20029);var inst_20009 = inst_20047;var inst_20010 = null;var inst_20011 = (0);var inst_20012 = (0);var state_20128__$1 = (function (){var statearr_20138 = state_20128;(statearr_20138[(13)] = inst_20011);
(statearr_20138[(14)] = inst_20010);
(statearr_20138[(15)] = inst_20012);
(statearr_20138[(16)] = inst_20046);
(statearr_20138[(17)] = inst_20009);
return statearr_20138;
})();var statearr_20139_20223 = state_20128__$1;(statearr_20139_20223[(2)] = null);
(statearr_20139_20223[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (39)))
{var state_20128__$1 = state_20128;var statearr_20143_20224 = state_20128__$1;(statearr_20143_20224[(2)] = null);
(statearr_20143_20224[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (4)))
{var inst_20000 = (state_20128[(11)]);var inst_20000__$1 = (state_20128[(2)]);var inst_20001 = (inst_20000__$1 == null);var state_20128__$1 = (function (){var statearr_20144 = state_20128;(statearr_20144[(11)] = inst_20000__$1);
return statearr_20144;
})();if(cljs.core.truth_(inst_20001))
{var statearr_20145_20225 = state_20128__$1;(statearr_20145_20225[(1)] = (5));
} else
{var statearr_20146_20226 = state_20128__$1;(statearr_20146_20226[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (15)))
{var inst_20011 = (state_20128[(13)]);var inst_20010 = (state_20128[(14)]);var inst_20012 = (state_20128[(15)]);var inst_20009 = (state_20128[(17)]);var inst_20025 = (state_20128[(2)]);var inst_20026 = (inst_20012 + (1));var tmp20140 = inst_20011;var tmp20141 = inst_20010;var tmp20142 = inst_20009;var inst_20009__$1 = tmp20142;var inst_20010__$1 = tmp20141;var inst_20011__$1 = tmp20140;var inst_20012__$1 = inst_20026;var state_20128__$1 = (function (){var statearr_20147 = state_20128;(statearr_20147[(18)] = inst_20025);
(statearr_20147[(13)] = inst_20011__$1);
(statearr_20147[(14)] = inst_20010__$1);
(statearr_20147[(15)] = inst_20012__$1);
(statearr_20147[(17)] = inst_20009__$1);
return statearr_20147;
})();var statearr_20148_20227 = state_20128__$1;(statearr_20148_20227[(2)] = null);
(statearr_20148_20227[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (21)))
{var inst_20050 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20152_20228 = state_20128__$1;(statearr_20152_20228[(2)] = inst_20050);
(statearr_20152_20228[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (31)))
{var inst_20076 = (state_20128[(10)]);var inst_20080 = done.call(null,null);var inst_20081 = cljs.core.async.untap_STAR_.call(null,m,inst_20076);var state_20128__$1 = (function (){var statearr_20153 = state_20128;(statearr_20153[(19)] = inst_20080);
return statearr_20153;
})();var statearr_20154_20229 = state_20128__$1;(statearr_20154_20229[(2)] = inst_20081);
(statearr_20154_20229[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (32)))
{var inst_20070 = (state_20128[(20)]);var inst_20071 = (state_20128[(9)]);var inst_20068 = (state_20128[(21)]);var inst_20069 = (state_20128[(12)]);var inst_20083 = (state_20128[(2)]);var inst_20084 = (inst_20071 + (1));var tmp20149 = inst_20070;var tmp20150 = inst_20068;var tmp20151 = inst_20069;var inst_20068__$1 = tmp20150;var inst_20069__$1 = tmp20151;var inst_20070__$1 = tmp20149;var inst_20071__$1 = inst_20084;var state_20128__$1 = (function (){var statearr_20155 = state_20128;(statearr_20155[(22)] = inst_20083);
(statearr_20155[(20)] = inst_20070__$1);
(statearr_20155[(9)] = inst_20071__$1);
(statearr_20155[(21)] = inst_20068__$1);
(statearr_20155[(12)] = inst_20069__$1);
return statearr_20155;
})();var statearr_20156_20230 = state_20128__$1;(statearr_20156_20230[(2)] = null);
(statearr_20156_20230[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (40)))
{var inst_20096 = (state_20128[(23)]);var inst_20100 = done.call(null,null);var inst_20101 = cljs.core.async.untap_STAR_.call(null,m,inst_20096);var state_20128__$1 = (function (){var statearr_20157 = state_20128;(statearr_20157[(24)] = inst_20100);
return statearr_20157;
})();var statearr_20158_20231 = state_20128__$1;(statearr_20158_20231[(2)] = inst_20101);
(statearr_20158_20231[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (33)))
{var inst_20087 = (state_20128[(25)]);var inst_20089 = cljs.core.chunked_seq_QMARK_.call(null,inst_20087);var state_20128__$1 = state_20128;if(inst_20089)
{var statearr_20159_20232 = state_20128__$1;(statearr_20159_20232[(1)] = (36));
} else
{var statearr_20160_20233 = state_20128__$1;(statearr_20160_20233[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (13)))
{var inst_20019 = (state_20128[(26)]);var inst_20022 = cljs.core.async.close_BANG_.call(null,inst_20019);var state_20128__$1 = state_20128;var statearr_20161_20234 = state_20128__$1;(statearr_20161_20234[(2)] = inst_20022);
(statearr_20161_20234[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (22)))
{var inst_20040 = (state_20128[(8)]);var inst_20043 = cljs.core.async.close_BANG_.call(null,inst_20040);var state_20128__$1 = state_20128;var statearr_20162_20235 = state_20128__$1;(statearr_20162_20235[(2)] = inst_20043);
(statearr_20162_20235[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (36)))
{var inst_20087 = (state_20128[(25)]);var inst_20091 = cljs.core.chunk_first.call(null,inst_20087);var inst_20092 = cljs.core.chunk_rest.call(null,inst_20087);var inst_20093 = cljs.core.count.call(null,inst_20091);var inst_20068 = inst_20092;var inst_20069 = inst_20091;var inst_20070 = inst_20093;var inst_20071 = (0);var state_20128__$1 = (function (){var statearr_20163 = state_20128;(statearr_20163[(20)] = inst_20070);
(statearr_20163[(9)] = inst_20071);
(statearr_20163[(21)] = inst_20068);
(statearr_20163[(12)] = inst_20069);
return statearr_20163;
})();var statearr_20164_20236 = state_20128__$1;(statearr_20164_20236[(2)] = null);
(statearr_20164_20236[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (41)))
{var inst_20087 = (state_20128[(25)]);var inst_20103 = (state_20128[(2)]);var inst_20104 = cljs.core.next.call(null,inst_20087);var inst_20068 = inst_20104;var inst_20069 = null;var inst_20070 = (0);var inst_20071 = (0);var state_20128__$1 = (function (){var statearr_20165 = state_20128;(statearr_20165[(20)] = inst_20070);
(statearr_20165[(9)] = inst_20071);
(statearr_20165[(21)] = inst_20068);
(statearr_20165[(12)] = inst_20069);
(statearr_20165[(27)] = inst_20103);
return statearr_20165;
})();var statearr_20166_20237 = state_20128__$1;(statearr_20166_20237[(2)] = null);
(statearr_20166_20237[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (43)))
{var state_20128__$1 = state_20128;var statearr_20167_20238 = state_20128__$1;(statearr_20167_20238[(2)] = null);
(statearr_20167_20238[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (29)))
{var inst_20112 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20168_20239 = state_20128__$1;(statearr_20168_20239[(2)] = inst_20112);
(statearr_20168_20239[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (44)))
{var inst_20121 = (state_20128[(2)]);var state_20128__$1 = (function (){var statearr_20169 = state_20128;(statearr_20169[(28)] = inst_20121);
return statearr_20169;
})();var statearr_20170_20240 = state_20128__$1;(statearr_20170_20240[(2)] = null);
(statearr_20170_20240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (6)))
{var inst_20060 = (state_20128[(29)]);var inst_20059 = cljs.core.deref.call(null,cs);var inst_20060__$1 = cljs.core.keys.call(null,inst_20059);var inst_20061 = cljs.core.count.call(null,inst_20060__$1);var inst_20062 = cljs.core.reset_BANG_.call(null,dctr,inst_20061);var inst_20067 = cljs.core.seq.call(null,inst_20060__$1);var inst_20068 = inst_20067;var inst_20069 = null;var inst_20070 = (0);var inst_20071 = (0);var state_20128__$1 = (function (){var statearr_20171 = state_20128;(statearr_20171[(20)] = inst_20070);
(statearr_20171[(9)] = inst_20071);
(statearr_20171[(29)] = inst_20060__$1);
(statearr_20171[(21)] = inst_20068);
(statearr_20171[(30)] = inst_20062);
(statearr_20171[(12)] = inst_20069);
return statearr_20171;
})();var statearr_20172_20241 = state_20128__$1;(statearr_20172_20241[(2)] = null);
(statearr_20172_20241[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (28)))
{var inst_20068 = (state_20128[(21)]);var inst_20087 = (state_20128[(25)]);var inst_20087__$1 = cljs.core.seq.call(null,inst_20068);var state_20128__$1 = (function (){var statearr_20173 = state_20128;(statearr_20173[(25)] = inst_20087__$1);
return statearr_20173;
})();if(inst_20087__$1)
{var statearr_20174_20242 = state_20128__$1;(statearr_20174_20242[(1)] = (33));
} else
{var statearr_20175_20243 = state_20128__$1;(statearr_20175_20243[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (25)))
{var inst_20070 = (state_20128[(20)]);var inst_20071 = (state_20128[(9)]);var inst_20073 = (inst_20071 < inst_20070);var inst_20074 = inst_20073;var state_20128__$1 = state_20128;if(cljs.core.truth_(inst_20074))
{var statearr_20176_20244 = state_20128__$1;(statearr_20176_20244[(1)] = (27));
} else
{var statearr_20177_20245 = state_20128__$1;(statearr_20177_20245[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (34)))
{var state_20128__$1 = state_20128;var statearr_20178_20246 = state_20128__$1;(statearr_20178_20246[(2)] = null);
(statearr_20178_20246[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (17)))
{var state_20128__$1 = state_20128;var statearr_20179_20247 = state_20128__$1;(statearr_20179_20247[(2)] = null);
(statearr_20179_20247[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (3)))
{var inst_20126 = (state_20128[(2)]);var state_20128__$1 = state_20128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20128__$1,inst_20126);
} else
{if((state_val_20129 === (12)))
{var inst_20055 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20180_20248 = state_20128__$1;(statearr_20180_20248[(2)] = inst_20055);
(statearr_20180_20248[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (2)))
{var state_20128__$1 = state_20128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20128__$1,(4),ch);
} else
{if((state_val_20129 === (23)))
{var state_20128__$1 = state_20128;var statearr_20181_20249 = state_20128__$1;(statearr_20181_20249[(2)] = null);
(statearr_20181_20249[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (35)))
{var inst_20110 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20182_20250 = state_20128__$1;(statearr_20182_20250[(2)] = inst_20110);
(statearr_20182_20250[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (19)))
{var inst_20029 = (state_20128[(7)]);var inst_20033 = cljs.core.chunk_first.call(null,inst_20029);var inst_20034 = cljs.core.chunk_rest.call(null,inst_20029);var inst_20035 = cljs.core.count.call(null,inst_20033);var inst_20009 = inst_20034;var inst_20010 = inst_20033;var inst_20011 = inst_20035;var inst_20012 = (0);var state_20128__$1 = (function (){var statearr_20183 = state_20128;(statearr_20183[(13)] = inst_20011);
(statearr_20183[(14)] = inst_20010);
(statearr_20183[(15)] = inst_20012);
(statearr_20183[(17)] = inst_20009);
return statearr_20183;
})();var statearr_20184_20251 = state_20128__$1;(statearr_20184_20251[(2)] = null);
(statearr_20184_20251[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (11)))
{var inst_20029 = (state_20128[(7)]);var inst_20009 = (state_20128[(17)]);var inst_20029__$1 = cljs.core.seq.call(null,inst_20009);var state_20128__$1 = (function (){var statearr_20185 = state_20128;(statearr_20185[(7)] = inst_20029__$1);
return statearr_20185;
})();if(inst_20029__$1)
{var statearr_20186_20252 = state_20128__$1;(statearr_20186_20252[(1)] = (16));
} else
{var statearr_20187_20253 = state_20128__$1;(statearr_20187_20253[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (9)))
{var inst_20057 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20188_20254 = state_20128__$1;(statearr_20188_20254[(2)] = inst_20057);
(statearr_20188_20254[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (5)))
{var inst_20007 = cljs.core.deref.call(null,cs);var inst_20008 = cljs.core.seq.call(null,inst_20007);var inst_20009 = inst_20008;var inst_20010 = null;var inst_20011 = (0);var inst_20012 = (0);var state_20128__$1 = (function (){var statearr_20189 = state_20128;(statearr_20189[(13)] = inst_20011);
(statearr_20189[(14)] = inst_20010);
(statearr_20189[(15)] = inst_20012);
(statearr_20189[(17)] = inst_20009);
return statearr_20189;
})();var statearr_20190_20255 = state_20128__$1;(statearr_20190_20255[(2)] = null);
(statearr_20190_20255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (14)))
{var state_20128__$1 = state_20128;var statearr_20191_20256 = state_20128__$1;(statearr_20191_20256[(2)] = null);
(statearr_20191_20256[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (45)))
{var inst_20118 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20192_20257 = state_20128__$1;(statearr_20192_20257[(2)] = inst_20118);
(statearr_20192_20257[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (26)))
{var inst_20060 = (state_20128[(29)]);var inst_20114 = (state_20128[(2)]);var inst_20115 = cljs.core.seq.call(null,inst_20060);var state_20128__$1 = (function (){var statearr_20193 = state_20128;(statearr_20193[(31)] = inst_20114);
return statearr_20193;
})();if(inst_20115)
{var statearr_20194_20258 = state_20128__$1;(statearr_20194_20258[(1)] = (42));
} else
{var statearr_20195_20259 = state_20128__$1;(statearr_20195_20259[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (16)))
{var inst_20029 = (state_20128[(7)]);var inst_20031 = cljs.core.chunked_seq_QMARK_.call(null,inst_20029);var state_20128__$1 = state_20128;if(inst_20031)
{var statearr_20196_20260 = state_20128__$1;(statearr_20196_20260[(1)] = (19));
} else
{var statearr_20197_20261 = state_20128__$1;(statearr_20197_20261[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (38)))
{var inst_20107 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20198_20262 = state_20128__$1;(statearr_20198_20262[(2)] = inst_20107);
(statearr_20198_20262[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (30)))
{var state_20128__$1 = state_20128;var statearr_20199_20263 = state_20128__$1;(statearr_20199_20263[(2)] = null);
(statearr_20199_20263[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (10)))
{var inst_20010 = (state_20128[(14)]);var inst_20012 = (state_20128[(15)]);var inst_20018 = cljs.core._nth.call(null,inst_20010,inst_20012);var inst_20019 = cljs.core.nth.call(null,inst_20018,(0),null);var inst_20020 = cljs.core.nth.call(null,inst_20018,(1),null);var state_20128__$1 = (function (){var statearr_20200 = state_20128;(statearr_20200[(26)] = inst_20019);
return statearr_20200;
})();if(cljs.core.truth_(inst_20020))
{var statearr_20201_20264 = state_20128__$1;(statearr_20201_20264[(1)] = (13));
} else
{var statearr_20202_20265 = state_20128__$1;(statearr_20202_20265[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (18)))
{var inst_20053 = (state_20128[(2)]);var state_20128__$1 = state_20128;var statearr_20203_20266 = state_20128__$1;(statearr_20203_20266[(2)] = inst_20053);
(statearr_20203_20266[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (42)))
{var state_20128__$1 = state_20128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20128__$1,(45),dchan);
} else
{if((state_val_20129 === (37)))
{var inst_20000 = (state_20128[(11)]);var inst_20087 = (state_20128[(25)]);var inst_20096 = (state_20128[(23)]);var inst_20096__$1 = cljs.core.first.call(null,inst_20087);var inst_20097 = cljs.core.async.put_BANG_.call(null,inst_20096__$1,inst_20000,done);var state_20128__$1 = (function (){var statearr_20204 = state_20128;(statearr_20204[(23)] = inst_20096__$1);
return statearr_20204;
})();if(cljs.core.truth_(inst_20097))
{var statearr_20205_20267 = state_20128__$1;(statearr_20205_20267[(1)] = (39));
} else
{var statearr_20206_20268 = state_20128__$1;(statearr_20206_20268[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20129 === (8)))
{var inst_20011 = (state_20128[(13)]);var inst_20012 = (state_20128[(15)]);var inst_20014 = (inst_20012 < inst_20011);var inst_20015 = inst_20014;var state_20128__$1 = state_20128;if(cljs.core.truth_(inst_20015))
{var statearr_20207_20269 = state_20128__$1;(statearr_20207_20269[(1)] = (10));
} else
{var statearr_20208_20270 = state_20128__$1;(statearr_20208_20270[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___20216,cs,m,dchan,dctr,done))
;return ((function (switch__15474__auto__,c__15530__auto___20216,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_20212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20212[(0)] = state_machine__15475__auto__);
(statearr_20212[(1)] = (1));
return statearr_20212;
});
var state_machine__15475__auto____1 = (function (state_20128){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_20128);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e20213){if((e20213 instanceof Object))
{var ex__15478__auto__ = e20213;var statearr_20214_20271 = state_20128;(statearr_20214_20271[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20213;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20272 = state_20128;
state_20128 = G__20272;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_20128){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_20128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___20216,cs,m,dchan,dctr,done))
})();var state__15532__auto__ = (function (){var statearr_20215 = f__15531__auto__.call(null);(statearr_20215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___20216);
return statearr_20215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___20216,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj20274 = {};return obj20274;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20275){var map__20280 = p__20275;var map__20280__$1 = ((cljs.core.seq_QMARK_.call(null,map__20280))?cljs.core.apply.call(null,cljs.core.hash_map,map__20280):map__20280);var opts = map__20280__$1;var statearr_20281_20284 = state;(statearr_20281_20284[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20280,map__20280__$1,opts){
return (function (val){var statearr_20282_20285 = state;(statearr_20282_20285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20280,map__20280__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_20283_20286 = state;(statearr_20283_20286[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20275 = null;if (arguments.length > 3) {
  p__20275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20275);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20287){
var state = cljs.core.first(arglist__20287);
arglist__20287 = cljs.core.next(arglist__20287);
var cont_block = cljs.core.first(arglist__20287);
arglist__20287 = cljs.core.next(arglist__20287);
var ports = cljs.core.first(arglist__20287);
var p__20275 = cljs.core.rest(arglist__20287);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20275);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t20407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20407 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20408){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20408 = meta20408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20407.cljs$lang$type = true;
cljs.core.async.t20407.cljs$lang$ctorStr = "cljs.core.async/t20407";
cljs.core.async.t20407.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20407");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20407.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20407.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20407.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20407.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20407.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20407.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20407.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20409){var self__ = this;
var _20409__$1 = this;return self__.meta20408;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20409,meta20408__$1){var self__ = this;
var _20409__$1 = this;return (new cljs.core.async.t20407(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20408__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20407 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20408){return (new cljs.core.async.t20407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20408));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20407(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15530__auto___20526 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20479){var state_val_20480 = (state_20479[(1)]);if((state_val_20480 === (7)))
{var inst_20423 = (state_20479[(7)]);var inst_20428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20423);var state_20479__$1 = state_20479;var statearr_20481_20527 = state_20479__$1;(statearr_20481_20527[(2)] = inst_20428);
(statearr_20481_20527[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (20)))
{var inst_20438 = (state_20479[(8)]);var state_20479__$1 = state_20479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20479__$1,(23),out,inst_20438);
} else
{if((state_val_20480 === (1)))
{var inst_20413 = (state_20479[(9)]);var inst_20413__$1 = calc_state.call(null);var inst_20414 = cljs.core.seq_QMARK_.call(null,inst_20413__$1);var state_20479__$1 = (function (){var statearr_20482 = state_20479;(statearr_20482[(9)] = inst_20413__$1);
return statearr_20482;
})();if(inst_20414)
{var statearr_20483_20528 = state_20479__$1;(statearr_20483_20528[(1)] = (2));
} else
{var statearr_20484_20529 = state_20479__$1;(statearr_20484_20529[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (24)))
{var inst_20431 = (state_20479[(10)]);var inst_20423 = inst_20431;var state_20479__$1 = (function (){var statearr_20485 = state_20479;(statearr_20485[(7)] = inst_20423);
return statearr_20485;
})();var statearr_20486_20530 = state_20479__$1;(statearr_20486_20530[(2)] = null);
(statearr_20486_20530[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (4)))
{var inst_20413 = (state_20479[(9)]);var inst_20419 = (state_20479[(2)]);var inst_20420 = cljs.core.get.call(null,inst_20419,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20421 = cljs.core.get.call(null,inst_20419,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20422 = cljs.core.get.call(null,inst_20419,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20423 = inst_20413;var state_20479__$1 = (function (){var statearr_20487 = state_20479;(statearr_20487[(11)] = inst_20420);
(statearr_20487[(7)] = inst_20423);
(statearr_20487[(12)] = inst_20421);
(statearr_20487[(13)] = inst_20422);
return statearr_20487;
})();var statearr_20488_20531 = state_20479__$1;(statearr_20488_20531[(2)] = null);
(statearr_20488_20531[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (15)))
{var state_20479__$1 = state_20479;var statearr_20489_20532 = state_20479__$1;(statearr_20489_20532[(2)] = null);
(statearr_20489_20532[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (21)))
{var inst_20431 = (state_20479[(10)]);var inst_20423 = inst_20431;var state_20479__$1 = (function (){var statearr_20490 = state_20479;(statearr_20490[(7)] = inst_20423);
return statearr_20490;
})();var statearr_20491_20533 = state_20479__$1;(statearr_20491_20533[(2)] = null);
(statearr_20491_20533[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (13)))
{var inst_20475 = (state_20479[(2)]);var state_20479__$1 = state_20479;var statearr_20492_20534 = state_20479__$1;(statearr_20492_20534[(2)] = inst_20475);
(statearr_20492_20534[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (22)))
{var inst_20473 = (state_20479[(2)]);var state_20479__$1 = state_20479;var statearr_20493_20535 = state_20479__$1;(statearr_20493_20535[(2)] = inst_20473);
(statearr_20493_20535[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (6)))
{var inst_20477 = (state_20479[(2)]);var state_20479__$1 = state_20479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20479__$1,inst_20477);
} else
{if((state_val_20480 === (25)))
{var state_20479__$1 = state_20479;var statearr_20494_20536 = state_20479__$1;(statearr_20494_20536[(2)] = null);
(statearr_20494_20536[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (17)))
{var inst_20453 = (state_20479[(14)]);var state_20479__$1 = state_20479;var statearr_20495_20537 = state_20479__$1;(statearr_20495_20537[(2)] = inst_20453);
(statearr_20495_20537[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (3)))
{var inst_20413 = (state_20479[(9)]);var state_20479__$1 = state_20479;var statearr_20496_20538 = state_20479__$1;(statearr_20496_20538[(2)] = inst_20413);
(statearr_20496_20538[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (12)))
{var inst_20453 = (state_20479[(14)]);var inst_20434 = (state_20479[(15)]);var inst_20439 = (state_20479[(16)]);var inst_20453__$1 = inst_20434.call(null,inst_20439);var state_20479__$1 = (function (){var statearr_20497 = state_20479;(statearr_20497[(14)] = inst_20453__$1);
return statearr_20497;
})();if(cljs.core.truth_(inst_20453__$1))
{var statearr_20498_20539 = state_20479__$1;(statearr_20498_20539[(1)] = (17));
} else
{var statearr_20499_20540 = state_20479__$1;(statearr_20499_20540[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (2)))
{var inst_20413 = (state_20479[(9)]);var inst_20416 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20413);var state_20479__$1 = state_20479;var statearr_20500_20541 = state_20479__$1;(statearr_20500_20541[(2)] = inst_20416);
(statearr_20500_20541[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (23)))
{var inst_20464 = (state_20479[(2)]);var state_20479__$1 = state_20479;if(cljs.core.truth_(inst_20464))
{var statearr_20501_20542 = state_20479__$1;(statearr_20501_20542[(1)] = (24));
} else
{var statearr_20502_20543 = state_20479__$1;(statearr_20502_20543[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (19)))
{var inst_20461 = (state_20479[(2)]);var state_20479__$1 = state_20479;if(cljs.core.truth_(inst_20461))
{var statearr_20503_20544 = state_20479__$1;(statearr_20503_20544[(1)] = (20));
} else
{var statearr_20504_20545 = state_20479__$1;(statearr_20504_20545[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (11)))
{var inst_20438 = (state_20479[(8)]);var inst_20444 = (inst_20438 == null);var state_20479__$1 = state_20479;if(cljs.core.truth_(inst_20444))
{var statearr_20505_20546 = state_20479__$1;(statearr_20505_20546[(1)] = (14));
} else
{var statearr_20506_20547 = state_20479__$1;(statearr_20506_20547[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (9)))
{var inst_20431 = (state_20479[(10)]);var inst_20431__$1 = (state_20479[(2)]);var inst_20432 = cljs.core.get.call(null,inst_20431__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20433 = cljs.core.get.call(null,inst_20431__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20434 = cljs.core.get.call(null,inst_20431__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20479__$1 = (function (){var statearr_20507 = state_20479;(statearr_20507[(17)] = inst_20433);
(statearr_20507[(15)] = inst_20434);
(statearr_20507[(10)] = inst_20431__$1);
return statearr_20507;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_20479__$1,(10),inst_20432);
} else
{if((state_val_20480 === (5)))
{var inst_20423 = (state_20479[(7)]);var inst_20426 = cljs.core.seq_QMARK_.call(null,inst_20423);var state_20479__$1 = state_20479;if(inst_20426)
{var statearr_20508_20548 = state_20479__$1;(statearr_20508_20548[(1)] = (7));
} else
{var statearr_20509_20549 = state_20479__$1;(statearr_20509_20549[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (14)))
{var inst_20439 = (state_20479[(16)]);var inst_20446 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20439);var state_20479__$1 = state_20479;var statearr_20510_20550 = state_20479__$1;(statearr_20510_20550[(2)] = inst_20446);
(statearr_20510_20550[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (26)))
{var inst_20469 = (state_20479[(2)]);var state_20479__$1 = state_20479;var statearr_20511_20551 = state_20479__$1;(statearr_20511_20551[(2)] = inst_20469);
(statearr_20511_20551[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (16)))
{var inst_20449 = (state_20479[(2)]);var inst_20450 = calc_state.call(null);var inst_20423 = inst_20450;var state_20479__$1 = (function (){var statearr_20512 = state_20479;(statearr_20512[(7)] = inst_20423);
(statearr_20512[(18)] = inst_20449);
return statearr_20512;
})();var statearr_20513_20552 = state_20479__$1;(statearr_20513_20552[(2)] = null);
(statearr_20513_20552[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (10)))
{var inst_20438 = (state_20479[(8)]);var inst_20439 = (state_20479[(16)]);var inst_20437 = (state_20479[(2)]);var inst_20438__$1 = cljs.core.nth.call(null,inst_20437,(0),null);var inst_20439__$1 = cljs.core.nth.call(null,inst_20437,(1),null);var inst_20440 = (inst_20438__$1 == null);var inst_20441 = cljs.core._EQ_.call(null,inst_20439__$1,change);var inst_20442 = (inst_20440) || (inst_20441);var state_20479__$1 = (function (){var statearr_20514 = state_20479;(statearr_20514[(8)] = inst_20438__$1);
(statearr_20514[(16)] = inst_20439__$1);
return statearr_20514;
})();if(cljs.core.truth_(inst_20442))
{var statearr_20515_20553 = state_20479__$1;(statearr_20515_20553[(1)] = (11));
} else
{var statearr_20516_20554 = state_20479__$1;(statearr_20516_20554[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (18)))
{var inst_20433 = (state_20479[(17)]);var inst_20434 = (state_20479[(15)]);var inst_20439 = (state_20479[(16)]);var inst_20456 = cljs.core.empty_QMARK_.call(null,inst_20434);var inst_20457 = inst_20433.call(null,inst_20439);var inst_20458 = cljs.core.not.call(null,inst_20457);var inst_20459 = (inst_20456) && (inst_20458);var state_20479__$1 = state_20479;var statearr_20517_20555 = state_20479__$1;(statearr_20517_20555[(2)] = inst_20459);
(statearr_20517_20555[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20480 === (8)))
{var inst_20423 = (state_20479[(7)]);var state_20479__$1 = state_20479;var statearr_20518_20556 = state_20479__$1;(statearr_20518_20556[(2)] = inst_20423);
(statearr_20518_20556[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15474__auto__,c__15530__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_20522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20522[(0)] = state_machine__15475__auto__);
(statearr_20522[(1)] = (1));
return statearr_20522;
});
var state_machine__15475__auto____1 = (function (state_20479){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_20479);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e20523){if((e20523 instanceof Object))
{var ex__15478__auto__ = e20523;var statearr_20524_20557 = state_20479;(statearr_20524_20557[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20558 = state_20479;
state_20479 = G__20558;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_20479){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_20479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15532__auto__ = (function (){var statearr_20525 = f__15531__auto__.call(null);(statearr_20525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___20526);
return statearr_20525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___20526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj20560 = {};return obj20560;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11495__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11495__auto__,mults){
return (function (p1__20561_SHARP_){if(cljs.core.truth_(p1__20561_SHARP_.call(null,topic)))
{return p1__20561_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20561_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11495__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20684 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20685){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20685 = meta20685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20684.cljs$lang$type = true;
cljs.core.async.t20684.cljs$lang$ctorStr = "cljs.core.async/t20684";
cljs.core.async.t20684.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20684");
});})(mults,ensure_mult))
;
cljs.core.async.t20684.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20684.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20684.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20684.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20686){var self__ = this;
var _20686__$1 = this;return self__.meta20685;
});})(mults,ensure_mult))
;
cljs.core.async.t20684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20686,meta20685__$1){var self__ = this;
var _20686__$1 = this;return (new cljs.core.async.t20684(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20685__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20684 = ((function (mults,ensure_mult){
return (function __GT_t20684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20685){return (new cljs.core.async.t20684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20685));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20684(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15530__auto___20806 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___20806,mults,ensure_mult,p){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___20806,mults,ensure_mult,p){
return (function (state_20758){var state_val_20759 = (state_20758[(1)]);if((state_val_20759 === (7)))
{var inst_20754 = (state_20758[(2)]);var state_20758__$1 = state_20758;var statearr_20760_20807 = state_20758__$1;(statearr_20760_20807[(2)] = inst_20754);
(statearr_20760_20807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (20)))
{var state_20758__$1 = state_20758;var statearr_20761_20808 = state_20758__$1;(statearr_20761_20808[(2)] = null);
(statearr_20761_20808[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (1)))
{var state_20758__$1 = state_20758;var statearr_20762_20809 = state_20758__$1;(statearr_20762_20809[(2)] = null);
(statearr_20762_20809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (24)))
{var inst_20737 = (state_20758[(7)]);var inst_20746 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20737);var state_20758__$1 = state_20758;var statearr_20763_20810 = state_20758__$1;(statearr_20763_20810[(2)] = inst_20746);
(statearr_20763_20810[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (4)))
{var inst_20689 = (state_20758[(8)]);var inst_20689__$1 = (state_20758[(2)]);var inst_20690 = (inst_20689__$1 == null);var state_20758__$1 = (function (){var statearr_20764 = state_20758;(statearr_20764[(8)] = inst_20689__$1);
return statearr_20764;
})();if(cljs.core.truth_(inst_20690))
{var statearr_20765_20811 = state_20758__$1;(statearr_20765_20811[(1)] = (5));
} else
{var statearr_20766_20812 = state_20758__$1;(statearr_20766_20812[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (15)))
{var inst_20731 = (state_20758[(2)]);var state_20758__$1 = state_20758;var statearr_20767_20813 = state_20758__$1;(statearr_20767_20813[(2)] = inst_20731);
(statearr_20767_20813[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (21)))
{var inst_20751 = (state_20758[(2)]);var state_20758__$1 = (function (){var statearr_20768 = state_20758;(statearr_20768[(9)] = inst_20751);
return statearr_20768;
})();var statearr_20769_20814 = state_20758__$1;(statearr_20769_20814[(2)] = null);
(statearr_20769_20814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (13)))
{var inst_20713 = (state_20758[(10)]);var inst_20715 = cljs.core.chunked_seq_QMARK_.call(null,inst_20713);var state_20758__$1 = state_20758;if(inst_20715)
{var statearr_20770_20815 = state_20758__$1;(statearr_20770_20815[(1)] = (16));
} else
{var statearr_20771_20816 = state_20758__$1;(statearr_20771_20816[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (22)))
{var inst_20743 = (state_20758[(2)]);var state_20758__$1 = state_20758;if(cljs.core.truth_(inst_20743))
{var statearr_20772_20817 = state_20758__$1;(statearr_20772_20817[(1)] = (23));
} else
{var statearr_20773_20818 = state_20758__$1;(statearr_20773_20818[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (6)))
{var inst_20689 = (state_20758[(8)]);var inst_20739 = (state_20758[(11)]);var inst_20737 = (state_20758[(7)]);var inst_20737__$1 = topic_fn.call(null,inst_20689);var inst_20738 = cljs.core.deref.call(null,mults);var inst_20739__$1 = cljs.core.get.call(null,inst_20738,inst_20737__$1);var state_20758__$1 = (function (){var statearr_20774 = state_20758;(statearr_20774[(11)] = inst_20739__$1);
(statearr_20774[(7)] = inst_20737__$1);
return statearr_20774;
})();if(cljs.core.truth_(inst_20739__$1))
{var statearr_20775_20819 = state_20758__$1;(statearr_20775_20819[(1)] = (19));
} else
{var statearr_20776_20820 = state_20758__$1;(statearr_20776_20820[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (25)))
{var inst_20748 = (state_20758[(2)]);var state_20758__$1 = state_20758;var statearr_20777_20821 = state_20758__$1;(statearr_20777_20821[(2)] = inst_20748);
(statearr_20777_20821[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (17)))
{var inst_20713 = (state_20758[(10)]);var inst_20722 = cljs.core.first.call(null,inst_20713);var inst_20723 = cljs.core.async.muxch_STAR_.call(null,inst_20722);var inst_20724 = cljs.core.async.close_BANG_.call(null,inst_20723);var inst_20725 = cljs.core.next.call(null,inst_20713);var inst_20699 = inst_20725;var inst_20700 = null;var inst_20701 = (0);var inst_20702 = (0);var state_20758__$1 = (function (){var statearr_20778 = state_20758;(statearr_20778[(12)] = inst_20700);
(statearr_20778[(13)] = inst_20702);
(statearr_20778[(14)] = inst_20724);
(statearr_20778[(15)] = inst_20701);
(statearr_20778[(16)] = inst_20699);
return statearr_20778;
})();var statearr_20779_20822 = state_20758__$1;(statearr_20779_20822[(2)] = null);
(statearr_20779_20822[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (3)))
{var inst_20756 = (state_20758[(2)]);var state_20758__$1 = state_20758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20758__$1,inst_20756);
} else
{if((state_val_20759 === (12)))
{var inst_20733 = (state_20758[(2)]);var state_20758__$1 = state_20758;var statearr_20780_20823 = state_20758__$1;(statearr_20780_20823[(2)] = inst_20733);
(statearr_20780_20823[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (2)))
{var state_20758__$1 = state_20758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20758__$1,(4),ch);
} else
{if((state_val_20759 === (23)))
{var state_20758__$1 = state_20758;var statearr_20781_20824 = state_20758__$1;(statearr_20781_20824[(2)] = null);
(statearr_20781_20824[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (19)))
{var inst_20689 = (state_20758[(8)]);var inst_20739 = (state_20758[(11)]);var inst_20741 = cljs.core.async.muxch_STAR_.call(null,inst_20739);var state_20758__$1 = state_20758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20758__$1,(22),inst_20741,inst_20689);
} else
{if((state_val_20759 === (11)))
{var inst_20713 = (state_20758[(10)]);var inst_20699 = (state_20758[(16)]);var inst_20713__$1 = cljs.core.seq.call(null,inst_20699);var state_20758__$1 = (function (){var statearr_20782 = state_20758;(statearr_20782[(10)] = inst_20713__$1);
return statearr_20782;
})();if(inst_20713__$1)
{var statearr_20783_20825 = state_20758__$1;(statearr_20783_20825[(1)] = (13));
} else
{var statearr_20784_20826 = state_20758__$1;(statearr_20784_20826[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (9)))
{var inst_20735 = (state_20758[(2)]);var state_20758__$1 = state_20758;var statearr_20785_20827 = state_20758__$1;(statearr_20785_20827[(2)] = inst_20735);
(statearr_20785_20827[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (5)))
{var inst_20696 = cljs.core.deref.call(null,mults);var inst_20697 = cljs.core.vals.call(null,inst_20696);var inst_20698 = cljs.core.seq.call(null,inst_20697);var inst_20699 = inst_20698;var inst_20700 = null;var inst_20701 = (0);var inst_20702 = (0);var state_20758__$1 = (function (){var statearr_20786 = state_20758;(statearr_20786[(12)] = inst_20700);
(statearr_20786[(13)] = inst_20702);
(statearr_20786[(15)] = inst_20701);
(statearr_20786[(16)] = inst_20699);
return statearr_20786;
})();var statearr_20787_20828 = state_20758__$1;(statearr_20787_20828[(2)] = null);
(statearr_20787_20828[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (14)))
{var state_20758__$1 = state_20758;var statearr_20791_20829 = state_20758__$1;(statearr_20791_20829[(2)] = null);
(statearr_20791_20829[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (16)))
{var inst_20713 = (state_20758[(10)]);var inst_20717 = cljs.core.chunk_first.call(null,inst_20713);var inst_20718 = cljs.core.chunk_rest.call(null,inst_20713);var inst_20719 = cljs.core.count.call(null,inst_20717);var inst_20699 = inst_20718;var inst_20700 = inst_20717;var inst_20701 = inst_20719;var inst_20702 = (0);var state_20758__$1 = (function (){var statearr_20792 = state_20758;(statearr_20792[(12)] = inst_20700);
(statearr_20792[(13)] = inst_20702);
(statearr_20792[(15)] = inst_20701);
(statearr_20792[(16)] = inst_20699);
return statearr_20792;
})();var statearr_20793_20830 = state_20758__$1;(statearr_20793_20830[(2)] = null);
(statearr_20793_20830[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (10)))
{var inst_20700 = (state_20758[(12)]);var inst_20702 = (state_20758[(13)]);var inst_20701 = (state_20758[(15)]);var inst_20699 = (state_20758[(16)]);var inst_20707 = cljs.core._nth.call(null,inst_20700,inst_20702);var inst_20708 = cljs.core.async.muxch_STAR_.call(null,inst_20707);var inst_20709 = cljs.core.async.close_BANG_.call(null,inst_20708);var inst_20710 = (inst_20702 + (1));var tmp20788 = inst_20700;var tmp20789 = inst_20701;var tmp20790 = inst_20699;var inst_20699__$1 = tmp20790;var inst_20700__$1 = tmp20788;var inst_20701__$1 = tmp20789;var inst_20702__$1 = inst_20710;var state_20758__$1 = (function (){var statearr_20794 = state_20758;(statearr_20794[(17)] = inst_20709);
(statearr_20794[(12)] = inst_20700__$1);
(statearr_20794[(13)] = inst_20702__$1);
(statearr_20794[(15)] = inst_20701__$1);
(statearr_20794[(16)] = inst_20699__$1);
return statearr_20794;
})();var statearr_20795_20831 = state_20758__$1;(statearr_20795_20831[(2)] = null);
(statearr_20795_20831[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (18)))
{var inst_20728 = (state_20758[(2)]);var state_20758__$1 = state_20758;var statearr_20796_20832 = state_20758__$1;(statearr_20796_20832[(2)] = inst_20728);
(statearr_20796_20832[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20759 === (8)))
{var inst_20702 = (state_20758[(13)]);var inst_20701 = (state_20758[(15)]);var inst_20704 = (inst_20702 < inst_20701);var inst_20705 = inst_20704;var state_20758__$1 = state_20758;if(cljs.core.truth_(inst_20705))
{var statearr_20797_20833 = state_20758__$1;(statearr_20797_20833[(1)] = (10));
} else
{var statearr_20798_20834 = state_20758__$1;(statearr_20798_20834[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___20806,mults,ensure_mult,p))
;return ((function (switch__15474__auto__,c__15530__auto___20806,mults,ensure_mult,p){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_20802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20802[(0)] = state_machine__15475__auto__);
(statearr_20802[(1)] = (1));
return statearr_20802;
});
var state_machine__15475__auto____1 = (function (state_20758){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_20758);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e20803){if((e20803 instanceof Object))
{var ex__15478__auto__ = e20803;var statearr_20804_20835 = state_20758;(statearr_20804_20835[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20803;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20836 = state_20758;
state_20758 = G__20836;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_20758){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_20758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___20806,mults,ensure_mult,p))
})();var state__15532__auto__ = (function (){var statearr_20805 = f__15531__auto__.call(null);(statearr_20805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___20806);
return statearr_20805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___20806,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__15530__auto___20973 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___20973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___20973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20943){var state_val_20944 = (state_20943[(1)]);if((state_val_20944 === (7)))
{var state_20943__$1 = state_20943;var statearr_20945_20974 = state_20943__$1;(statearr_20945_20974[(2)] = null);
(statearr_20945_20974[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (1)))
{var state_20943__$1 = state_20943;var statearr_20946_20975 = state_20943__$1;(statearr_20946_20975[(2)] = null);
(statearr_20946_20975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (4)))
{var inst_20907 = (state_20943[(7)]);var inst_20909 = (inst_20907 < cnt);var state_20943__$1 = state_20943;if(cljs.core.truth_(inst_20909))
{var statearr_20947_20976 = state_20943__$1;(statearr_20947_20976[(1)] = (6));
} else
{var statearr_20948_20977 = state_20943__$1;(statearr_20948_20977[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (15)))
{var inst_20939 = (state_20943[(2)]);var state_20943__$1 = state_20943;var statearr_20949_20978 = state_20943__$1;(statearr_20949_20978[(2)] = inst_20939);
(statearr_20949_20978[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (13)))
{var inst_20932 = cljs.core.async.close_BANG_.call(null,out);var state_20943__$1 = state_20943;var statearr_20950_20979 = state_20943__$1;(statearr_20950_20979[(2)] = inst_20932);
(statearr_20950_20979[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (6)))
{var state_20943__$1 = state_20943;var statearr_20951_20980 = state_20943__$1;(statearr_20951_20980[(2)] = null);
(statearr_20951_20980[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (3)))
{var inst_20941 = (state_20943[(2)]);var state_20943__$1 = state_20943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20943__$1,inst_20941);
} else
{if((state_val_20944 === (12)))
{var inst_20929 = (state_20943[(8)]);var inst_20929__$1 = (state_20943[(2)]);var inst_20930 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20929__$1);var state_20943__$1 = (function (){var statearr_20952 = state_20943;(statearr_20952[(8)] = inst_20929__$1);
return statearr_20952;
})();if(cljs.core.truth_(inst_20930))
{var statearr_20953_20981 = state_20943__$1;(statearr_20953_20981[(1)] = (13));
} else
{var statearr_20954_20982 = state_20943__$1;(statearr_20954_20982[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (2)))
{var inst_20906 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20907 = (0);var state_20943__$1 = (function (){var statearr_20955 = state_20943;(statearr_20955[(9)] = inst_20906);
(statearr_20955[(7)] = inst_20907);
return statearr_20955;
})();var statearr_20956_20983 = state_20943__$1;(statearr_20956_20983[(2)] = null);
(statearr_20956_20983[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (11)))
{var inst_20907 = (state_20943[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20943,(10),Object,null,(9));var inst_20916 = chs__$1.call(null,inst_20907);var inst_20917 = done.call(null,inst_20907);var inst_20918 = cljs.core.async.take_BANG_.call(null,inst_20916,inst_20917);var state_20943__$1 = state_20943;var statearr_20957_20984 = state_20943__$1;(statearr_20957_20984[(2)] = inst_20918);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20943__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (9)))
{var inst_20907 = (state_20943[(7)]);var inst_20920 = (state_20943[(2)]);var inst_20921 = (inst_20907 + (1));var inst_20907__$1 = inst_20921;var state_20943__$1 = (function (){var statearr_20958 = state_20943;(statearr_20958[(10)] = inst_20920);
(statearr_20958[(7)] = inst_20907__$1);
return statearr_20958;
})();var statearr_20959_20985 = state_20943__$1;(statearr_20959_20985[(2)] = null);
(statearr_20959_20985[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (5)))
{var inst_20927 = (state_20943[(2)]);var state_20943__$1 = (function (){var statearr_20960 = state_20943;(statearr_20960[(11)] = inst_20927);
return statearr_20960;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20943__$1,(12),dchan);
} else
{if((state_val_20944 === (14)))
{var inst_20929 = (state_20943[(8)]);var inst_20934 = cljs.core.apply.call(null,f,inst_20929);var state_20943__$1 = state_20943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20943__$1,(16),out,inst_20934);
} else
{if((state_val_20944 === (16)))
{var inst_20936 = (state_20943[(2)]);var state_20943__$1 = (function (){var statearr_20961 = state_20943;(statearr_20961[(12)] = inst_20936);
return statearr_20961;
})();var statearr_20962_20986 = state_20943__$1;(statearr_20962_20986[(2)] = null);
(statearr_20962_20986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (10)))
{var inst_20911 = (state_20943[(2)]);var inst_20912 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20943__$1 = (function (){var statearr_20963 = state_20943;(statearr_20963[(13)] = inst_20911);
return statearr_20963;
})();var statearr_20964_20987 = state_20943__$1;(statearr_20964_20987[(2)] = inst_20912);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20943__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20944 === (8)))
{var inst_20925 = (state_20943[(2)]);var state_20943__$1 = state_20943;var statearr_20965_20988 = state_20943__$1;(statearr_20965_20988[(2)] = inst_20925);
(statearr_20965_20988[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___20973,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15474__auto__,c__15530__auto___20973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_20969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20969[(0)] = state_machine__15475__auto__);
(statearr_20969[(1)] = (1));
return statearr_20969;
});
var state_machine__15475__auto____1 = (function (state_20943){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_20943);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e20970){if((e20970 instanceof Object))
{var ex__15478__auto__ = e20970;var statearr_20971_20989 = state_20943;(statearr_20971_20989[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20970;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20990 = state_20943;
state_20943 = G__20990;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_20943){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_20943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___20973,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15532__auto__ = (function (){var statearr_20972 = f__15531__auto__.call(null);(statearr_20972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___20973);
return statearr_20972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___20973,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15530__auto___21098 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___21098,out){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___21098,out){
return (function (state_21074){var state_val_21075 = (state_21074[(1)]);if((state_val_21075 === (7)))
{var inst_21054 = (state_21074[(7)]);var inst_21053 = (state_21074[(8)]);var inst_21053__$1 = (state_21074[(2)]);var inst_21054__$1 = cljs.core.nth.call(null,inst_21053__$1,(0),null);var inst_21055 = cljs.core.nth.call(null,inst_21053__$1,(1),null);var inst_21056 = (inst_21054__$1 == null);var state_21074__$1 = (function (){var statearr_21076 = state_21074;(statearr_21076[(7)] = inst_21054__$1);
(statearr_21076[(9)] = inst_21055);
(statearr_21076[(8)] = inst_21053__$1);
return statearr_21076;
})();if(cljs.core.truth_(inst_21056))
{var statearr_21077_21099 = state_21074__$1;(statearr_21077_21099[(1)] = (8));
} else
{var statearr_21078_21100 = state_21074__$1;(statearr_21078_21100[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21075 === (1)))
{var inst_21045 = cljs.core.vec.call(null,chs);var inst_21046 = inst_21045;var state_21074__$1 = (function (){var statearr_21079 = state_21074;(statearr_21079[(10)] = inst_21046);
return statearr_21079;
})();var statearr_21080_21101 = state_21074__$1;(statearr_21080_21101[(2)] = null);
(statearr_21080_21101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21075 === (4)))
{var inst_21046 = (state_21074[(10)]);var state_21074__$1 = state_21074;return cljs.core.async.ioc_alts_BANG_.call(null,state_21074__$1,(7),inst_21046);
} else
{if((state_val_21075 === (6)))
{var inst_21070 = (state_21074[(2)]);var state_21074__$1 = state_21074;var statearr_21081_21102 = state_21074__$1;(statearr_21081_21102[(2)] = inst_21070);
(statearr_21081_21102[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21075 === (3)))
{var inst_21072 = (state_21074[(2)]);var state_21074__$1 = state_21074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21074__$1,inst_21072);
} else
{if((state_val_21075 === (2)))
{var inst_21046 = (state_21074[(10)]);var inst_21048 = cljs.core.count.call(null,inst_21046);var inst_21049 = (inst_21048 > (0));var state_21074__$1 = state_21074;if(cljs.core.truth_(inst_21049))
{var statearr_21083_21103 = state_21074__$1;(statearr_21083_21103[(1)] = (4));
} else
{var statearr_21084_21104 = state_21074__$1;(statearr_21084_21104[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21075 === (11)))
{var inst_21046 = (state_21074[(10)]);var inst_21063 = (state_21074[(2)]);var tmp21082 = inst_21046;var inst_21046__$1 = tmp21082;var state_21074__$1 = (function (){var statearr_21085 = state_21074;(statearr_21085[(11)] = inst_21063);
(statearr_21085[(10)] = inst_21046__$1);
return statearr_21085;
})();var statearr_21086_21105 = state_21074__$1;(statearr_21086_21105[(2)] = null);
(statearr_21086_21105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21075 === (9)))
{var inst_21054 = (state_21074[(7)]);var state_21074__$1 = state_21074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21074__$1,(11),out,inst_21054);
} else
{if((state_val_21075 === (5)))
{var inst_21068 = cljs.core.async.close_BANG_.call(null,out);var state_21074__$1 = state_21074;var statearr_21087_21106 = state_21074__$1;(statearr_21087_21106[(2)] = inst_21068);
(statearr_21087_21106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21075 === (10)))
{var inst_21066 = (state_21074[(2)]);var state_21074__$1 = state_21074;var statearr_21088_21107 = state_21074__$1;(statearr_21088_21107[(2)] = inst_21066);
(statearr_21088_21107[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21075 === (8)))
{var inst_21054 = (state_21074[(7)]);var inst_21055 = (state_21074[(9)]);var inst_21046 = (state_21074[(10)]);var inst_21053 = (state_21074[(8)]);var inst_21058 = (function (){var c = inst_21055;var v = inst_21054;var vec__21051 = inst_21053;var cs = inst_21046;return ((function (c,v,vec__21051,cs,inst_21054,inst_21055,inst_21046,inst_21053,state_val_21075,c__15530__auto___21098,out){
return (function (p1__20991_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20991_SHARP_);
});
;})(c,v,vec__21051,cs,inst_21054,inst_21055,inst_21046,inst_21053,state_val_21075,c__15530__auto___21098,out))
})();var inst_21059 = cljs.core.filterv.call(null,inst_21058,inst_21046);var inst_21046__$1 = inst_21059;var state_21074__$1 = (function (){var statearr_21089 = state_21074;(statearr_21089[(10)] = inst_21046__$1);
return statearr_21089;
})();var statearr_21090_21108 = state_21074__$1;(statearr_21090_21108[(2)] = null);
(statearr_21090_21108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___21098,out))
;return ((function (switch__15474__auto__,c__15530__auto___21098,out){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_21094 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21094[(0)] = state_machine__15475__auto__);
(statearr_21094[(1)] = (1));
return statearr_21094;
});
var state_machine__15475__auto____1 = (function (state_21074){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_21074);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e21095){if((e21095 instanceof Object))
{var ex__15478__auto__ = e21095;var statearr_21096_21109 = state_21074;(statearr_21096_21109[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21110 = state_21074;
state_21074 = G__21110;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_21074){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_21074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___21098,out))
})();var state__15532__auto__ = (function (){var statearr_21097 = f__15531__auto__.call(null);(statearr_21097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___21098);
return statearr_21097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___21098,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15530__auto___21203 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___21203,out){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___21203,out){
return (function (state_21180){var state_val_21181 = (state_21180[(1)]);if((state_val_21181 === (7)))
{var inst_21162 = (state_21180[(7)]);var inst_21162__$1 = (state_21180[(2)]);var inst_21163 = (inst_21162__$1 == null);var inst_21164 = cljs.core.not.call(null,inst_21163);var state_21180__$1 = (function (){var statearr_21182 = state_21180;(statearr_21182[(7)] = inst_21162__$1);
return statearr_21182;
})();if(inst_21164)
{var statearr_21183_21204 = state_21180__$1;(statearr_21183_21204[(1)] = (8));
} else
{var statearr_21184_21205 = state_21180__$1;(statearr_21184_21205[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21181 === (1)))
{var inst_21157 = (0);var state_21180__$1 = (function (){var statearr_21185 = state_21180;(statearr_21185[(8)] = inst_21157);
return statearr_21185;
})();var statearr_21186_21206 = state_21180__$1;(statearr_21186_21206[(2)] = null);
(statearr_21186_21206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21181 === (4)))
{var state_21180__$1 = state_21180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21180__$1,(7),ch);
} else
{if((state_val_21181 === (6)))
{var inst_21175 = (state_21180[(2)]);var state_21180__$1 = state_21180;var statearr_21187_21207 = state_21180__$1;(statearr_21187_21207[(2)] = inst_21175);
(statearr_21187_21207[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21181 === (3)))
{var inst_21177 = (state_21180[(2)]);var inst_21178 = cljs.core.async.close_BANG_.call(null,out);var state_21180__$1 = (function (){var statearr_21188 = state_21180;(statearr_21188[(9)] = inst_21177);
return statearr_21188;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21180__$1,inst_21178);
} else
{if((state_val_21181 === (2)))
{var inst_21157 = (state_21180[(8)]);var inst_21159 = (inst_21157 < n);var state_21180__$1 = state_21180;if(cljs.core.truth_(inst_21159))
{var statearr_21189_21208 = state_21180__$1;(statearr_21189_21208[(1)] = (4));
} else
{var statearr_21190_21209 = state_21180__$1;(statearr_21190_21209[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21181 === (11)))
{var inst_21157 = (state_21180[(8)]);var inst_21167 = (state_21180[(2)]);var inst_21168 = (inst_21157 + (1));var inst_21157__$1 = inst_21168;var state_21180__$1 = (function (){var statearr_21191 = state_21180;(statearr_21191[(10)] = inst_21167);
(statearr_21191[(8)] = inst_21157__$1);
return statearr_21191;
})();var statearr_21192_21210 = state_21180__$1;(statearr_21192_21210[(2)] = null);
(statearr_21192_21210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21181 === (9)))
{var state_21180__$1 = state_21180;var statearr_21193_21211 = state_21180__$1;(statearr_21193_21211[(2)] = null);
(statearr_21193_21211[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21181 === (5)))
{var state_21180__$1 = state_21180;var statearr_21194_21212 = state_21180__$1;(statearr_21194_21212[(2)] = null);
(statearr_21194_21212[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21181 === (10)))
{var inst_21172 = (state_21180[(2)]);var state_21180__$1 = state_21180;var statearr_21195_21213 = state_21180__$1;(statearr_21195_21213[(2)] = inst_21172);
(statearr_21195_21213[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21181 === (8)))
{var inst_21162 = (state_21180[(7)]);var state_21180__$1 = state_21180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21180__$1,(11),out,inst_21162);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___21203,out))
;return ((function (switch__15474__auto__,c__15530__auto___21203,out){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_21199 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21199[(0)] = state_machine__15475__auto__);
(statearr_21199[(1)] = (1));
return statearr_21199;
});
var state_machine__15475__auto____1 = (function (state_21180){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_21180);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e21200){if((e21200 instanceof Object))
{var ex__15478__auto__ = e21200;var statearr_21201_21214 = state_21180;(statearr_21201_21214[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21200;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21215 = state_21180;
state_21180 = G__21215;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_21180){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_21180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___21203,out))
})();var state__15532__auto__ = (function (){var statearr_21202 = f__15531__auto__.call(null);(statearr_21202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___21203);
return statearr_21202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___21203,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21223 = (function (ch,f,map_LT_,meta21224){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21224 = meta21224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21223.cljs$lang$type = true;
cljs.core.async.t21223.cljs$lang$ctorStr = "cljs.core.async/t21223";
cljs.core.async.t21223.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t21223");
});
cljs.core.async.t21223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t21223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21226 = (function (fn1,_,meta21224,ch,f,map_LT_,meta21227){
this.fn1 = fn1;
this._ = _;
this.meta21224 = meta21224;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21227 = meta21227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21226.cljs$lang$type = true;
cljs.core.async.t21226.cljs$lang$ctorStr = "cljs.core.async/t21226";
cljs.core.async.t21226.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t21226");
});})(___$1))
;
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__21216_SHARP_){return f1.call(null,(((p1__21216_SHARP_ == null))?null:self__.f.call(null,p1__21216_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t21226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21228){var self__ = this;
var _21228__$1 = this;return self__.meta21227;
});})(___$1))
;
cljs.core.async.t21226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21228,meta21227__$1){var self__ = this;
var _21228__$1 = this;return (new cljs.core.async.t21226(self__.fn1,self__._,self__.meta21224,self__.ch,self__.f,self__.map_LT_,meta21227__$1));
});})(___$1))
;
cljs.core.async.__GT_t21226 = ((function (___$1){
return (function __GT_t21226(fn1__$1,___$2,meta21224__$1,ch__$2,f__$2,map_LT___$2,meta21227){return (new cljs.core.async.t21226(fn1__$1,___$2,meta21224__$1,ch__$2,f__$2,map_LT___$2,meta21227));
});})(___$1))
;
}
return (new cljs.core.async.t21226(fn1,___$1,self__.meta21224,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11483__auto__ = ret;if(cljs.core.truth_(and__11483__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11483__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21223.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21225){var self__ = this;
var _21225__$1 = this;return self__.meta21224;
});
cljs.core.async.t21223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21225,meta21224__$1){var self__ = this;
var _21225__$1 = this;return (new cljs.core.async.t21223(self__.ch,self__.f,self__.map_LT_,meta21224__$1));
});
cljs.core.async.__GT_t21223 = (function __GT_t21223(ch__$1,f__$1,map_LT___$1,meta21224){return (new cljs.core.async.t21223(ch__$1,f__$1,map_LT___$1,meta21224));
});
}
return (new cljs.core.async.t21223(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21232 = (function (ch,f,map_GT_,meta21233){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21233 = meta21233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21232.cljs$lang$type = true;
cljs.core.async.t21232.cljs$lang$ctorStr = "cljs.core.async/t21232";
cljs.core.async.t21232.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t21232");
});
cljs.core.async.t21232.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t21232.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21232.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21234){var self__ = this;
var _21234__$1 = this;return self__.meta21233;
});
cljs.core.async.t21232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21234,meta21233__$1){var self__ = this;
var _21234__$1 = this;return (new cljs.core.async.t21232(self__.ch,self__.f,self__.map_GT_,meta21233__$1));
});
cljs.core.async.__GT_t21232 = (function __GT_t21232(ch__$1,f__$1,map_GT___$1,meta21233){return (new cljs.core.async.t21232(ch__$1,f__$1,map_GT___$1,meta21233));
});
}
return (new cljs.core.async.t21232(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21238 = (function (ch,p,filter_GT_,meta21239){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21239 = meta21239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21238.cljs$lang$type = true;
cljs.core.async.t21238.cljs$lang$ctorStr = "cljs.core.async/t21238";
cljs.core.async.t21238.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t21238");
});
cljs.core.async.t21238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t21238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21238.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21238.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21240){var self__ = this;
var _21240__$1 = this;return self__.meta21239;
});
cljs.core.async.t21238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21240,meta21239__$1){var self__ = this;
var _21240__$1 = this;return (new cljs.core.async.t21238(self__.ch,self__.p,self__.filter_GT_,meta21239__$1));
});
cljs.core.async.__GT_t21238 = (function __GT_t21238(ch__$1,p__$1,filter_GT___$1,meta21239){return (new cljs.core.async.t21238(ch__$1,p__$1,filter_GT___$1,meta21239));
});
}
return (new cljs.core.async.t21238(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15530__auto___21323 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___21323,out){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___21323,out){
return (function (state_21302){var state_val_21303 = (state_21302[(1)]);if((state_val_21303 === (7)))
{var inst_21298 = (state_21302[(2)]);var state_21302__$1 = state_21302;var statearr_21304_21324 = state_21302__$1;(statearr_21304_21324[(2)] = inst_21298);
(statearr_21304_21324[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (1)))
{var state_21302__$1 = state_21302;var statearr_21305_21325 = state_21302__$1;(statearr_21305_21325[(2)] = null);
(statearr_21305_21325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (4)))
{var inst_21284 = (state_21302[(7)]);var inst_21284__$1 = (state_21302[(2)]);var inst_21285 = (inst_21284__$1 == null);var state_21302__$1 = (function (){var statearr_21306 = state_21302;(statearr_21306[(7)] = inst_21284__$1);
return statearr_21306;
})();if(cljs.core.truth_(inst_21285))
{var statearr_21307_21326 = state_21302__$1;(statearr_21307_21326[(1)] = (5));
} else
{var statearr_21308_21327 = state_21302__$1;(statearr_21308_21327[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (6)))
{var inst_21284 = (state_21302[(7)]);var inst_21289 = p.call(null,inst_21284);var state_21302__$1 = state_21302;if(cljs.core.truth_(inst_21289))
{var statearr_21309_21328 = state_21302__$1;(statearr_21309_21328[(1)] = (8));
} else
{var statearr_21310_21329 = state_21302__$1;(statearr_21310_21329[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (3)))
{var inst_21300 = (state_21302[(2)]);var state_21302__$1 = state_21302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21302__$1,inst_21300);
} else
{if((state_val_21303 === (2)))
{var state_21302__$1 = state_21302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21302__$1,(4),ch);
} else
{if((state_val_21303 === (11)))
{var inst_21292 = (state_21302[(2)]);var state_21302__$1 = state_21302;var statearr_21311_21330 = state_21302__$1;(statearr_21311_21330[(2)] = inst_21292);
(statearr_21311_21330[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (9)))
{var state_21302__$1 = state_21302;var statearr_21312_21331 = state_21302__$1;(statearr_21312_21331[(2)] = null);
(statearr_21312_21331[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (5)))
{var inst_21287 = cljs.core.async.close_BANG_.call(null,out);var state_21302__$1 = state_21302;var statearr_21313_21332 = state_21302__$1;(statearr_21313_21332[(2)] = inst_21287);
(statearr_21313_21332[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (10)))
{var inst_21295 = (state_21302[(2)]);var state_21302__$1 = (function (){var statearr_21314 = state_21302;(statearr_21314[(8)] = inst_21295);
return statearr_21314;
})();var statearr_21315_21333 = state_21302__$1;(statearr_21315_21333[(2)] = null);
(statearr_21315_21333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (8)))
{var inst_21284 = (state_21302[(7)]);var state_21302__$1 = state_21302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21302__$1,(11),out,inst_21284);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___21323,out))
;return ((function (switch__15474__auto__,c__15530__auto___21323,out){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_21319 = [null,null,null,null,null,null,null,null,null];(statearr_21319[(0)] = state_machine__15475__auto__);
(statearr_21319[(1)] = (1));
return statearr_21319;
});
var state_machine__15475__auto____1 = (function (state_21302){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_21302);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e21320){if((e21320 instanceof Object))
{var ex__15478__auto__ = e21320;var statearr_21321_21334 = state_21302;(statearr_21321_21334[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21320;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21335 = state_21302;
state_21302 = G__21335;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_21302){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_21302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___21323,out))
})();var state__15532__auto__ = (function (){var statearr_21322 = f__15531__auto__.call(null);(statearr_21322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___21323);
return statearr_21322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___21323,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15530__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto__){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto__){
return (function (state_21501){var state_val_21502 = (state_21501[(1)]);if((state_val_21502 === (7)))
{var inst_21497 = (state_21501[(2)]);var state_21501__$1 = state_21501;var statearr_21503_21544 = state_21501__$1;(statearr_21503_21544[(2)] = inst_21497);
(statearr_21503_21544[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (20)))
{var inst_21467 = (state_21501[(7)]);var inst_21478 = (state_21501[(2)]);var inst_21479 = cljs.core.next.call(null,inst_21467);var inst_21453 = inst_21479;var inst_21454 = null;var inst_21455 = (0);var inst_21456 = (0);var state_21501__$1 = (function (){var statearr_21504 = state_21501;(statearr_21504[(8)] = inst_21454);
(statearr_21504[(9)] = inst_21456);
(statearr_21504[(10)] = inst_21453);
(statearr_21504[(11)] = inst_21478);
(statearr_21504[(12)] = inst_21455);
return statearr_21504;
})();var statearr_21505_21545 = state_21501__$1;(statearr_21505_21545[(2)] = null);
(statearr_21505_21545[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (1)))
{var state_21501__$1 = state_21501;var statearr_21506_21546 = state_21501__$1;(statearr_21506_21546[(2)] = null);
(statearr_21506_21546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (4)))
{var inst_21442 = (state_21501[(13)]);var inst_21442__$1 = (state_21501[(2)]);var inst_21443 = (inst_21442__$1 == null);var state_21501__$1 = (function (){var statearr_21507 = state_21501;(statearr_21507[(13)] = inst_21442__$1);
return statearr_21507;
})();if(cljs.core.truth_(inst_21443))
{var statearr_21508_21547 = state_21501__$1;(statearr_21508_21547[(1)] = (5));
} else
{var statearr_21509_21548 = state_21501__$1;(statearr_21509_21548[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (15)))
{var state_21501__$1 = state_21501;var statearr_21513_21549 = state_21501__$1;(statearr_21513_21549[(2)] = null);
(statearr_21513_21549[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (21)))
{var state_21501__$1 = state_21501;var statearr_21514_21550 = state_21501__$1;(statearr_21514_21550[(2)] = null);
(statearr_21514_21550[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (13)))
{var inst_21454 = (state_21501[(8)]);var inst_21456 = (state_21501[(9)]);var inst_21453 = (state_21501[(10)]);var inst_21455 = (state_21501[(12)]);var inst_21463 = (state_21501[(2)]);var inst_21464 = (inst_21456 + (1));var tmp21510 = inst_21454;var tmp21511 = inst_21453;var tmp21512 = inst_21455;var inst_21453__$1 = tmp21511;var inst_21454__$1 = tmp21510;var inst_21455__$1 = tmp21512;var inst_21456__$1 = inst_21464;var state_21501__$1 = (function (){var statearr_21515 = state_21501;(statearr_21515[(8)] = inst_21454__$1);
(statearr_21515[(9)] = inst_21456__$1);
(statearr_21515[(10)] = inst_21453__$1);
(statearr_21515[(14)] = inst_21463);
(statearr_21515[(12)] = inst_21455__$1);
return statearr_21515;
})();var statearr_21516_21551 = state_21501__$1;(statearr_21516_21551[(2)] = null);
(statearr_21516_21551[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (22)))
{var state_21501__$1 = state_21501;var statearr_21517_21552 = state_21501__$1;(statearr_21517_21552[(2)] = null);
(statearr_21517_21552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (6)))
{var inst_21442 = (state_21501[(13)]);var inst_21451 = f.call(null,inst_21442);var inst_21452 = cljs.core.seq.call(null,inst_21451);var inst_21453 = inst_21452;var inst_21454 = null;var inst_21455 = (0);var inst_21456 = (0);var state_21501__$1 = (function (){var statearr_21518 = state_21501;(statearr_21518[(8)] = inst_21454);
(statearr_21518[(9)] = inst_21456);
(statearr_21518[(10)] = inst_21453);
(statearr_21518[(12)] = inst_21455);
return statearr_21518;
})();var statearr_21519_21553 = state_21501__$1;(statearr_21519_21553[(2)] = null);
(statearr_21519_21553[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (17)))
{var inst_21467 = (state_21501[(7)]);var inst_21471 = cljs.core.chunk_first.call(null,inst_21467);var inst_21472 = cljs.core.chunk_rest.call(null,inst_21467);var inst_21473 = cljs.core.count.call(null,inst_21471);var inst_21453 = inst_21472;var inst_21454 = inst_21471;var inst_21455 = inst_21473;var inst_21456 = (0);var state_21501__$1 = (function (){var statearr_21520 = state_21501;(statearr_21520[(8)] = inst_21454);
(statearr_21520[(9)] = inst_21456);
(statearr_21520[(10)] = inst_21453);
(statearr_21520[(12)] = inst_21455);
return statearr_21520;
})();var statearr_21521_21554 = state_21501__$1;(statearr_21521_21554[(2)] = null);
(statearr_21521_21554[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (3)))
{var inst_21499 = (state_21501[(2)]);var state_21501__$1 = state_21501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else
{if((state_val_21502 === (12)))
{var inst_21487 = (state_21501[(2)]);var state_21501__$1 = state_21501;var statearr_21522_21555 = state_21501__$1;(statearr_21522_21555[(2)] = inst_21487);
(statearr_21522_21555[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (2)))
{var state_21501__$1 = state_21501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21501__$1,(4),in$);
} else
{if((state_val_21502 === (23)))
{var inst_21495 = (state_21501[(2)]);var state_21501__$1 = state_21501;var statearr_21523_21556 = state_21501__$1;(statearr_21523_21556[(2)] = inst_21495);
(statearr_21523_21556[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (19)))
{var inst_21482 = (state_21501[(2)]);var state_21501__$1 = state_21501;var statearr_21524_21557 = state_21501__$1;(statearr_21524_21557[(2)] = inst_21482);
(statearr_21524_21557[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (11)))
{var inst_21453 = (state_21501[(10)]);var inst_21467 = (state_21501[(7)]);var inst_21467__$1 = cljs.core.seq.call(null,inst_21453);var state_21501__$1 = (function (){var statearr_21525 = state_21501;(statearr_21525[(7)] = inst_21467__$1);
return statearr_21525;
})();if(inst_21467__$1)
{var statearr_21526_21558 = state_21501__$1;(statearr_21526_21558[(1)] = (14));
} else
{var statearr_21527_21559 = state_21501__$1;(statearr_21527_21559[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (9)))
{var inst_21489 = (state_21501[(2)]);var inst_21490 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21501__$1 = (function (){var statearr_21528 = state_21501;(statearr_21528[(15)] = inst_21489);
return statearr_21528;
})();if(cljs.core.truth_(inst_21490))
{var statearr_21529_21560 = state_21501__$1;(statearr_21529_21560[(1)] = (21));
} else
{var statearr_21530_21561 = state_21501__$1;(statearr_21530_21561[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (5)))
{var inst_21445 = cljs.core.async.close_BANG_.call(null,out);var state_21501__$1 = state_21501;var statearr_21531_21562 = state_21501__$1;(statearr_21531_21562[(2)] = inst_21445);
(statearr_21531_21562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (14)))
{var inst_21467 = (state_21501[(7)]);var inst_21469 = cljs.core.chunked_seq_QMARK_.call(null,inst_21467);var state_21501__$1 = state_21501;if(inst_21469)
{var statearr_21532_21563 = state_21501__$1;(statearr_21532_21563[(1)] = (17));
} else
{var statearr_21533_21564 = state_21501__$1;(statearr_21533_21564[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (16)))
{var inst_21485 = (state_21501[(2)]);var state_21501__$1 = state_21501;var statearr_21534_21565 = state_21501__$1;(statearr_21534_21565[(2)] = inst_21485);
(statearr_21534_21565[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21502 === (10)))
{var inst_21454 = (state_21501[(8)]);var inst_21456 = (state_21501[(9)]);var inst_21461 = cljs.core._nth.call(null,inst_21454,inst_21456);var state_21501__$1 = state_21501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(13),out,inst_21461);
} else
{if((state_val_21502 === (18)))
{var inst_21467 = (state_21501[(7)]);var inst_21476 = cljs.core.first.call(null,inst_21467);var state_21501__$1 = state_21501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(20),out,inst_21476);
} else
{if((state_val_21502 === (8)))
{var inst_21456 = (state_21501[(9)]);var inst_21455 = (state_21501[(12)]);var inst_21458 = (inst_21456 < inst_21455);var inst_21459 = inst_21458;var state_21501__$1 = state_21501;if(cljs.core.truth_(inst_21459))
{var statearr_21535_21566 = state_21501__$1;(statearr_21535_21566[(1)] = (10));
} else
{var statearr_21536_21567 = state_21501__$1;(statearr_21536_21567[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto__))
;return ((function (switch__15474__auto__,c__15530__auto__){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_21540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21540[(0)] = state_machine__15475__auto__);
(statearr_21540[(1)] = (1));
return statearr_21540;
});
var state_machine__15475__auto____1 = (function (state_21501){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_21501);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e21541){if((e21541 instanceof Object))
{var ex__15478__auto__ = e21541;var statearr_21542_21568 = state_21501;(statearr_21542_21568[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21541;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21569 = state_21501;
state_21501 = G__21569;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto__))
})();var state__15532__auto__ = (function (){var statearr_21543 = f__15531__auto__.call(null);(statearr_21543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto__);
return statearr_21543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto__))
);
return c__15530__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15530__auto___21666 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___21666,out){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___21666,out){
return (function (state_21641){var state_val_21642 = (state_21641[(1)]);if((state_val_21642 === (7)))
{var inst_21636 = (state_21641[(2)]);var state_21641__$1 = state_21641;var statearr_21643_21667 = state_21641__$1;(statearr_21643_21667[(2)] = inst_21636);
(statearr_21643_21667[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21642 === (1)))
{var inst_21618 = null;var state_21641__$1 = (function (){var statearr_21644 = state_21641;(statearr_21644[(7)] = inst_21618);
return statearr_21644;
})();var statearr_21645_21668 = state_21641__$1;(statearr_21645_21668[(2)] = null);
(statearr_21645_21668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21642 === (4)))
{var inst_21621 = (state_21641[(8)]);var inst_21621__$1 = (state_21641[(2)]);var inst_21622 = (inst_21621__$1 == null);var inst_21623 = cljs.core.not.call(null,inst_21622);var state_21641__$1 = (function (){var statearr_21646 = state_21641;(statearr_21646[(8)] = inst_21621__$1);
return statearr_21646;
})();if(inst_21623)
{var statearr_21647_21669 = state_21641__$1;(statearr_21647_21669[(1)] = (5));
} else
{var statearr_21648_21670 = state_21641__$1;(statearr_21648_21670[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21642 === (6)))
{var state_21641__$1 = state_21641;var statearr_21649_21671 = state_21641__$1;(statearr_21649_21671[(2)] = null);
(statearr_21649_21671[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21642 === (3)))
{var inst_21638 = (state_21641[(2)]);var inst_21639 = cljs.core.async.close_BANG_.call(null,out);var state_21641__$1 = (function (){var statearr_21650 = state_21641;(statearr_21650[(9)] = inst_21638);
return statearr_21650;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21641__$1,inst_21639);
} else
{if((state_val_21642 === (2)))
{var state_21641__$1 = state_21641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21641__$1,(4),ch);
} else
{if((state_val_21642 === (11)))
{var inst_21621 = (state_21641[(8)]);var inst_21630 = (state_21641[(2)]);var inst_21618 = inst_21621;var state_21641__$1 = (function (){var statearr_21651 = state_21641;(statearr_21651[(7)] = inst_21618);
(statearr_21651[(10)] = inst_21630);
return statearr_21651;
})();var statearr_21652_21672 = state_21641__$1;(statearr_21652_21672[(2)] = null);
(statearr_21652_21672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21642 === (9)))
{var inst_21621 = (state_21641[(8)]);var state_21641__$1 = state_21641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21641__$1,(11),out,inst_21621);
} else
{if((state_val_21642 === (5)))
{var inst_21621 = (state_21641[(8)]);var inst_21618 = (state_21641[(7)]);var inst_21625 = cljs.core._EQ_.call(null,inst_21621,inst_21618);var state_21641__$1 = state_21641;if(inst_21625)
{var statearr_21654_21673 = state_21641__$1;(statearr_21654_21673[(1)] = (8));
} else
{var statearr_21655_21674 = state_21641__$1;(statearr_21655_21674[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21642 === (10)))
{var inst_21633 = (state_21641[(2)]);var state_21641__$1 = state_21641;var statearr_21656_21675 = state_21641__$1;(statearr_21656_21675[(2)] = inst_21633);
(statearr_21656_21675[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21642 === (8)))
{var inst_21618 = (state_21641[(7)]);var tmp21653 = inst_21618;var inst_21618__$1 = tmp21653;var state_21641__$1 = (function (){var statearr_21657 = state_21641;(statearr_21657[(7)] = inst_21618__$1);
return statearr_21657;
})();var statearr_21658_21676 = state_21641__$1;(statearr_21658_21676[(2)] = null);
(statearr_21658_21676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___21666,out))
;return ((function (switch__15474__auto__,c__15530__auto___21666,out){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_21662 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21662[(0)] = state_machine__15475__auto__);
(statearr_21662[(1)] = (1));
return statearr_21662;
});
var state_machine__15475__auto____1 = (function (state_21641){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_21641);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e21663){if((e21663 instanceof Object))
{var ex__15478__auto__ = e21663;var statearr_21664_21677 = state_21641;(statearr_21664_21677[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21663;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21678 = state_21641;
state_21641 = G__21678;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_21641){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_21641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___21666,out))
})();var state__15532__auto__ = (function (){var statearr_21665 = f__15531__auto__.call(null);(statearr_21665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___21666);
return statearr_21665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___21666,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15530__auto___21813 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___21813,out){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___21813,out){
return (function (state_21783){var state_val_21784 = (state_21783[(1)]);if((state_val_21784 === (7)))
{var inst_21779 = (state_21783[(2)]);var state_21783__$1 = state_21783;var statearr_21785_21814 = state_21783__$1;(statearr_21785_21814[(2)] = inst_21779);
(statearr_21785_21814[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (1)))
{var inst_21746 = (new Array(n));var inst_21747 = inst_21746;var inst_21748 = (0);var state_21783__$1 = (function (){var statearr_21786 = state_21783;(statearr_21786[(7)] = inst_21747);
(statearr_21786[(8)] = inst_21748);
return statearr_21786;
})();var statearr_21787_21815 = state_21783__$1;(statearr_21787_21815[(2)] = null);
(statearr_21787_21815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (4)))
{var inst_21751 = (state_21783[(9)]);var inst_21751__$1 = (state_21783[(2)]);var inst_21752 = (inst_21751__$1 == null);var inst_21753 = cljs.core.not.call(null,inst_21752);var state_21783__$1 = (function (){var statearr_21788 = state_21783;(statearr_21788[(9)] = inst_21751__$1);
return statearr_21788;
})();if(inst_21753)
{var statearr_21789_21816 = state_21783__$1;(statearr_21789_21816[(1)] = (5));
} else
{var statearr_21790_21817 = state_21783__$1;(statearr_21790_21817[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (15)))
{var inst_21773 = (state_21783[(2)]);var state_21783__$1 = state_21783;var statearr_21791_21818 = state_21783__$1;(statearr_21791_21818[(2)] = inst_21773);
(statearr_21791_21818[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (13)))
{var state_21783__$1 = state_21783;var statearr_21792_21819 = state_21783__$1;(statearr_21792_21819[(2)] = null);
(statearr_21792_21819[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (6)))
{var inst_21748 = (state_21783[(8)]);var inst_21769 = (inst_21748 > (0));var state_21783__$1 = state_21783;if(cljs.core.truth_(inst_21769))
{var statearr_21793_21820 = state_21783__$1;(statearr_21793_21820[(1)] = (12));
} else
{var statearr_21794_21821 = state_21783__$1;(statearr_21794_21821[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (3)))
{var inst_21781 = (state_21783[(2)]);var state_21783__$1 = state_21783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21783__$1,inst_21781);
} else
{if((state_val_21784 === (12)))
{var inst_21747 = (state_21783[(7)]);var inst_21771 = cljs.core.vec.call(null,inst_21747);var state_21783__$1 = state_21783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21783__$1,(15),out,inst_21771);
} else
{if((state_val_21784 === (2)))
{var state_21783__$1 = state_21783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21783__$1,(4),ch);
} else
{if((state_val_21784 === (11)))
{var inst_21763 = (state_21783[(2)]);var inst_21764 = (new Array(n));var inst_21747 = inst_21764;var inst_21748 = (0);var state_21783__$1 = (function (){var statearr_21795 = state_21783;(statearr_21795[(7)] = inst_21747);
(statearr_21795[(10)] = inst_21763);
(statearr_21795[(8)] = inst_21748);
return statearr_21795;
})();var statearr_21796_21822 = state_21783__$1;(statearr_21796_21822[(2)] = null);
(statearr_21796_21822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (9)))
{var inst_21747 = (state_21783[(7)]);var inst_21761 = cljs.core.vec.call(null,inst_21747);var state_21783__$1 = state_21783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21783__$1,(11),out,inst_21761);
} else
{if((state_val_21784 === (5)))
{var inst_21751 = (state_21783[(9)]);var inst_21747 = (state_21783[(7)]);var inst_21756 = (state_21783[(11)]);var inst_21748 = (state_21783[(8)]);var inst_21755 = (inst_21747[inst_21748] = inst_21751);var inst_21756__$1 = (inst_21748 + (1));var inst_21757 = (inst_21756__$1 < n);var state_21783__$1 = (function (){var statearr_21797 = state_21783;(statearr_21797[(11)] = inst_21756__$1);
(statearr_21797[(12)] = inst_21755);
return statearr_21797;
})();if(cljs.core.truth_(inst_21757))
{var statearr_21798_21823 = state_21783__$1;(statearr_21798_21823[(1)] = (8));
} else
{var statearr_21799_21824 = state_21783__$1;(statearr_21799_21824[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (14)))
{var inst_21776 = (state_21783[(2)]);var inst_21777 = cljs.core.async.close_BANG_.call(null,out);var state_21783__$1 = (function (){var statearr_21801 = state_21783;(statearr_21801[(13)] = inst_21776);
return statearr_21801;
})();var statearr_21802_21825 = state_21783__$1;(statearr_21802_21825[(2)] = inst_21777);
(statearr_21802_21825[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (10)))
{var inst_21767 = (state_21783[(2)]);var state_21783__$1 = state_21783;var statearr_21803_21826 = state_21783__$1;(statearr_21803_21826[(2)] = inst_21767);
(statearr_21803_21826[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21784 === (8)))
{var inst_21747 = (state_21783[(7)]);var inst_21756 = (state_21783[(11)]);var tmp21800 = inst_21747;var inst_21747__$1 = tmp21800;var inst_21748 = inst_21756;var state_21783__$1 = (function (){var statearr_21804 = state_21783;(statearr_21804[(7)] = inst_21747__$1);
(statearr_21804[(8)] = inst_21748);
return statearr_21804;
})();var statearr_21805_21827 = state_21783__$1;(statearr_21805_21827[(2)] = null);
(statearr_21805_21827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___21813,out))
;return ((function (switch__15474__auto__,c__15530__auto___21813,out){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_21809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21809[(0)] = state_machine__15475__auto__);
(statearr_21809[(1)] = (1));
return statearr_21809;
});
var state_machine__15475__auto____1 = (function (state_21783){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_21783);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e21810){if((e21810 instanceof Object))
{var ex__15478__auto__ = e21810;var statearr_21811_21828 = state_21783;(statearr_21811_21828[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21783);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21810;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21829 = state_21783;
state_21783 = G__21829;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_21783){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_21783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___21813,out))
})();var state__15532__auto__ = (function (){var statearr_21812 = f__15531__auto__.call(null);(statearr_21812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___21813);
return statearr_21812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___21813,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15530__auto___21972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15530__auto___21972,out){
return (function (){var f__15531__auto__ = (function (){var switch__15474__auto__ = ((function (c__15530__auto___21972,out){
return (function (state_21942){var state_val_21943 = (state_21942[(1)]);if((state_val_21943 === (7)))
{var inst_21938 = (state_21942[(2)]);var state_21942__$1 = state_21942;var statearr_21944_21973 = state_21942__$1;(statearr_21944_21973[(2)] = inst_21938);
(statearr_21944_21973[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (1)))
{var inst_21901 = [];var inst_21902 = inst_21901;var inst_21903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21942__$1 = (function (){var statearr_21945 = state_21942;(statearr_21945[(7)] = inst_21902);
(statearr_21945[(8)] = inst_21903);
return statearr_21945;
})();var statearr_21946_21974 = state_21942__$1;(statearr_21946_21974[(2)] = null);
(statearr_21946_21974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (4)))
{var inst_21906 = (state_21942[(9)]);var inst_21906__$1 = (state_21942[(2)]);var inst_21907 = (inst_21906__$1 == null);var inst_21908 = cljs.core.not.call(null,inst_21907);var state_21942__$1 = (function (){var statearr_21947 = state_21942;(statearr_21947[(9)] = inst_21906__$1);
return statearr_21947;
})();if(inst_21908)
{var statearr_21948_21975 = state_21942__$1;(statearr_21948_21975[(1)] = (5));
} else
{var statearr_21949_21976 = state_21942__$1;(statearr_21949_21976[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (15)))
{var inst_21932 = (state_21942[(2)]);var state_21942__$1 = state_21942;var statearr_21950_21977 = state_21942__$1;(statearr_21950_21977[(2)] = inst_21932);
(statearr_21950_21977[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (13)))
{var state_21942__$1 = state_21942;var statearr_21951_21978 = state_21942__$1;(statearr_21951_21978[(2)] = null);
(statearr_21951_21978[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (6)))
{var inst_21902 = (state_21942[(7)]);var inst_21927 = inst_21902.length;var inst_21928 = (inst_21927 > (0));var state_21942__$1 = state_21942;if(cljs.core.truth_(inst_21928))
{var statearr_21952_21979 = state_21942__$1;(statearr_21952_21979[(1)] = (12));
} else
{var statearr_21953_21980 = state_21942__$1;(statearr_21953_21980[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (3)))
{var inst_21940 = (state_21942[(2)]);var state_21942__$1 = state_21942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21942__$1,inst_21940);
} else
{if((state_val_21943 === (12)))
{var inst_21902 = (state_21942[(7)]);var inst_21930 = cljs.core.vec.call(null,inst_21902);var state_21942__$1 = state_21942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21942__$1,(15),out,inst_21930);
} else
{if((state_val_21943 === (2)))
{var state_21942__$1 = state_21942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21942__$1,(4),ch);
} else
{if((state_val_21943 === (11)))
{var inst_21910 = (state_21942[(10)]);var inst_21906 = (state_21942[(9)]);var inst_21920 = (state_21942[(2)]);var inst_21921 = [];var inst_21922 = inst_21921.push(inst_21906);var inst_21902 = inst_21921;var inst_21903 = inst_21910;var state_21942__$1 = (function (){var statearr_21954 = state_21942;(statearr_21954[(11)] = inst_21920);
(statearr_21954[(7)] = inst_21902);
(statearr_21954[(8)] = inst_21903);
(statearr_21954[(12)] = inst_21922);
return statearr_21954;
})();var statearr_21955_21981 = state_21942__$1;(statearr_21955_21981[(2)] = null);
(statearr_21955_21981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (9)))
{var inst_21902 = (state_21942[(7)]);var inst_21918 = cljs.core.vec.call(null,inst_21902);var state_21942__$1 = state_21942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21942__$1,(11),out,inst_21918);
} else
{if((state_val_21943 === (5)))
{var inst_21910 = (state_21942[(10)]);var inst_21903 = (state_21942[(8)]);var inst_21906 = (state_21942[(9)]);var inst_21910__$1 = f.call(null,inst_21906);var inst_21911 = cljs.core._EQ_.call(null,inst_21910__$1,inst_21903);var inst_21912 = cljs.core.keyword_identical_QMARK_.call(null,inst_21903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21913 = (inst_21911) || (inst_21912);var state_21942__$1 = (function (){var statearr_21956 = state_21942;(statearr_21956[(10)] = inst_21910__$1);
return statearr_21956;
})();if(cljs.core.truth_(inst_21913))
{var statearr_21957_21982 = state_21942__$1;(statearr_21957_21982[(1)] = (8));
} else
{var statearr_21958_21983 = state_21942__$1;(statearr_21958_21983[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (14)))
{var inst_21935 = (state_21942[(2)]);var inst_21936 = cljs.core.async.close_BANG_.call(null,out);var state_21942__$1 = (function (){var statearr_21960 = state_21942;(statearr_21960[(13)] = inst_21935);
return statearr_21960;
})();var statearr_21961_21984 = state_21942__$1;(statearr_21961_21984[(2)] = inst_21936);
(statearr_21961_21984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (10)))
{var inst_21925 = (state_21942[(2)]);var state_21942__$1 = state_21942;var statearr_21962_21985 = state_21942__$1;(statearr_21962_21985[(2)] = inst_21925);
(statearr_21962_21985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21943 === (8)))
{var inst_21910 = (state_21942[(10)]);var inst_21902 = (state_21942[(7)]);var inst_21906 = (state_21942[(9)]);var inst_21915 = inst_21902.push(inst_21906);var tmp21959 = inst_21902;var inst_21902__$1 = tmp21959;var inst_21903 = inst_21910;var state_21942__$1 = (function (){var statearr_21963 = state_21942;(statearr_21963[(14)] = inst_21915);
(statearr_21963[(7)] = inst_21902__$1);
(statearr_21963[(8)] = inst_21903);
return statearr_21963;
})();var statearr_21964_21986 = state_21942__$1;(statearr_21964_21986[(2)] = null);
(statearr_21964_21986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15530__auto___21972,out))
;return ((function (switch__15474__auto__,c__15530__auto___21972,out){
return (function() {
var state_machine__15475__auto__ = null;
var state_machine__15475__auto____0 = (function (){var statearr_21968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21968[(0)] = state_machine__15475__auto__);
(statearr_21968[(1)] = (1));
return statearr_21968;
});
var state_machine__15475__auto____1 = (function (state_21942){while(true){
var ret_value__15476__auto__ = (function (){try{while(true){
var result__15477__auto__ = switch__15474__auto__.call(null,state_21942);if(cljs.core.keyword_identical_QMARK_.call(null,result__15477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15477__auto__;
}
break;
}
}catch (e21969){if((e21969 instanceof Object))
{var ex__15478__auto__ = e21969;var statearr_21970_21987 = state_21942;(statearr_21970_21987[(5)] = ex__15478__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21988 = state_21942;
state_21942 = G__21988;
continue;
}
} else
{return ret_value__15476__auto__;
}
break;
}
});
state_machine__15475__auto__ = function(state_21942){
switch(arguments.length){
case 0:
return state_machine__15475__auto____0.call(this);
case 1:
return state_machine__15475__auto____1.call(this,state_21942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15475__auto____0;
state_machine__15475__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15475__auto____1;
return state_machine__15475__auto__;
})()
;})(switch__15474__auto__,c__15530__auto___21972,out))
})();var state__15532__auto__ = (function (){var statearr_21971 = f__15531__auto__.call(null);(statearr_21971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15530__auto___21972);
return statearr_21971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15532__auto__);
});})(c__15530__auto___21972,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map