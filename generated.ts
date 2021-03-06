{
    JQueryStatic = function (p0, p1) { return join(JQueryStatic, JQuery); };
    JQueryStatic.Deferred = DeferredStatic;
    JQueryStatic.Event = EventStatic;
    JQueryStatic.cssHooks = PlainObject;
    JQueryStatic.cssNumber = PlainObject;
    JQueryStatic.fn = JQuery;
    JQueryStatic.fx = { interval: number, off: join(boolean, union), step: PlainObject };
    JQueryStatic.ready = Thenable;
    JQueryStatic.support = PlainObject;
    JQueryStatic.valHooks = PlainObject;
    JQueryStatic.Callbacks = function (p0) { return Callbacks; };
    JQueryStatic.ajax = function (p0, p1) { return jqXHR; };
    JQueryStatic.ajaxPrefilter = function (p0, p1) { return void; };
    JQueryStatic.ajaxSetup = function (p0) { return AjaxSettings; };
    JQueryStatic.ajaxTransport = function (p0, p1) { return void; };
    JQueryStatic.contains = function (p0, p1) { return join(boolean, union); };
    JQueryStatic.css = function (p0, p1) { return any; };
    JQueryStatic.data = function (p0, p1, p2) { return join(this, any); };
    JQueryStatic.dequeue = function (p0, p1) { return void; };
    JQueryStatic.each = function (p0, p1) { return join(this, ArrayLike); };
    JQueryStatic.error = function (p0) { return any; };
    JQueryStatic.escapeSelector = function (p0) { return string; };
    JQueryStatic.extend = function (p0, p1, p2, p3, p4, p5, p6, p7) { return join(intersection, intersection, intersection, intersection, intersection, intersection, any, intersection, intersection, intersection, intersection, intersection, intersection); };
    JQueryStatic.get = function (p0, p1, p2, p3) { return jqXHR; };
    JQueryStatic.getJSON = function (p0, p1, p2) { return jqXHR; };
    JQueryStatic.getScript = function (p0, p1) { return jqXHR; };
    JQueryStatic.globalEval = function (p0) { return void; };
    JQueryStatic.grep = function (p0, p1, p2) { return Array; };
    JQueryStatic.hasData = function (p0) { return join(boolean, union); };
    JQueryStatic.holdReady = function (p0) { return void; };
    JQueryStatic.htmlPrefilter = function (p0) { return string; };
    JQueryStatic.inArray = function (p0, p1, p2) { return number; };
    JQueryStatic.isArray = function (p0) { return join(boolean, union); };
    JQueryStatic.isEmptyObject = function (p0) { return join(boolean, union); };
    JQueryStatic.isFunction = function (p0) { return join(boolean, union); };
    JQueryStatic.isNumeric = function (p0) { return join(boolean, union); };
    JQueryStatic.isPlainObject = function (p0) { return join(boolean, union); };
    JQueryStatic.isWindow = function (p0) { return join(boolean, union); };
    JQueryStatic.isXMLDoc = function (p0) { return join(boolean, union); };
    JQueryStatic.makeArray = function (p0) { return Array; };
    JQueryStatic.map = function (p0, p1) { return join(Array, Array); };
    JQueryStatic.merge = function (p0, p1) { return Array; };
    JQueryStatic.noConflict = function (p0) { return any; };
    JQueryStatic.noop = function () { return undefined; };
    JQueryStatic.now = function () { return number; };
    JQueryStatic.param = function (p0, p1) { return string; };
    JQueryStatic.parseHTML = function (p0, p1, p2) { return Array; };
    JQueryStatic.parseJSON = function (p0) { return any; };
    JQueryStatic.parseXML = function (p0) { return XMLDocument; };
    JQueryStatic.post = function (p0, p1, p2, p3) { return jqXHR; };
    JQueryStatic.proxy = function (p0, p1, p2, p3, p4, p5, p6, p7, p8) { return join(function (p0) { return any; }, function (p0) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function (p0) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5, p6, p7) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4, p5) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3, p4) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2, p3) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1, p2) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0, p1) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function (p0) { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }, function () { return this; }); };
    JQueryStatic.queue = function (p0, p1, p2) { return intersection; };
    JQueryStatic.readyException = function (p0) { return any; };
    JQueryStatic.removeData = function (p0, p1) { return void; };
    JQueryStatic.speed = function (p0, p1, p2) { return EffectsOptions; };
    JQueryStatic.trim = function (p0) { return string; };
    JQueryStatic.type = function (p0) { return union; };
    JQueryStatic.unique = function (p0) { return Array; };
    JQueryStatic.uniqueSort = function (p0) { return Array; };
    JQueryStatic.when = function (p0, p1, p2) { return join(Promise, Promise, Promise, Promise3, Promise2, Promise3); };
    JQuery = {};
    JQuery.jquery = string;
    JQuery.length = number;
    JQuery.add = function (p0, p1) { return any; };
    JQuery.addBack = function (p0) { return any; };
    JQuery.addClass = function (p0) { return any; };
    JQuery.after = function (p0) { return any; };
    JQuery.ajaxComplete = function (p0) { return any; };
    JQuery.ajaxError = function (p0) { return any; };
    JQuery.ajaxSend = function (p0) { return any; };
    JQuery.ajaxStart = function (p0) { return any; };
    JQuery.ajaxStop = function (p0) { return any; };
    JQuery.ajaxSuccess = function (p0) { return any; };
    JQuery.animate = function (p0, p1, p2, p3) { return any; };
    JQuery.append = function (p0) { return any; };
    JQuery.appendTo = function (p0) { return any; };
    JQuery.attr = function (p0, p1) { return join(string, any); };
    JQuery.before = function (p0) { return any; };
    JQuery.bind = function (p0, p1, p2) { return any; };
    JQuery.blur = function (p0, p1) { return any; };
    JQuery.change = function (p0, p1) { return any; };
    JQuery.children = function (p0) { return any; };
    JQuery.clearQueue = function (p0) { return any; };
    JQuery.click = function (p0, p1) { return any; };
    JQuery.clone = function (p0, p1) { return any; };
    JQuery.closest = function (p0, p1) { return any; };
    JQuery.contents = function () { return JQuery; };
    JQuery.contextmenu = function (p0, p1) { return any; };
    JQuery.css = function (p0, p1) { return join(PlainObject, string, any); };
    JQuery.data = function (p0, p1) { return join(PlainObject, any, any); };
    JQuery.dblclick = function (p0, p1) { return any; };
    JQuery.delay = function (p0, p1) { return any; };
    JQuery.delegate = function (p0, p1, p2, p3) { return any; };
    JQuery.dequeue = function (p0) { return any; };
    JQuery.detach = function (p0) { return any; };
    JQuery.each = function (p0) { return any; };
    JQuery.empty = function () { return any; };
    JQuery.end = function () { return any; };
    JQuery.eq = function (p0) { return any; };
    JQuery.extend = function (p0) { return any; };
    JQuery.fadeIn = function (p0, p1, p2) { return any; };
    JQuery.fadeOut = function (p0, p1, p2) { return any; };
    JQuery.fadeTo = function (p0, p1, p2, p3) { return any; };
    JQuery.fadeToggle = function (p0, p1, p2) { return any; };
    JQuery.filter = function (p0) { return any; };
    JQuery.find = function (p0) { return any; };
    JQuery.finish = function (p0) { return any; };
    JQuery.first = function () { return any; };
    JQuery.focus = function (p0, p1) { return any; };
    JQuery.focusin = function (p0, p1) { return any; };
    JQuery.focusout = function (p0, p1) { return any; };
    JQuery.get = function (p0) { return join(Array, this); };
    JQuery.has = function (p0) { return any; };
    JQuery.hasClass = function (p0) { return join(boolean, union); };
    JQuery.height = function (p0) { return join(number, any); };
    JQuery.hide = function (p0, p1, p2) { return any; };
    JQuery.hover = function (p0, p1) { return any; };
    JQuery.html = function (p0) { return join(string, any); };
    JQuery.index = function (p0) { return number; };
    JQuery.innerHeight = function (p0) { return join(number, any); };
    JQuery.innerWidth = function (p0) { return join(number, any); };
    JQuery.insertAfter = function (p0) { return any; };
    JQuery.insertBefore = function (p0) { return any; };
    JQuery.is = function (p0) { return join(boolean, union); };
    JQuery.keydown = function (p0, p1) { return any; };
    JQuery.keypress = function (p0, p1) { return any; };
    JQuery.keyup = function (p0, p1) { return any; };
    JQuery.last = function () { return any; };
    JQuery.load = function (p0, p1, p2) { return any; };
    JQuery.map = function (p0) { return any; };
    JQuery.mousedown = function (p0, p1) { return any; };
    JQuery.mouseenter = function (p0, p1) { return any; };
    JQuery.mouseleave = function (p0, p1) { return any; };
    JQuery.mousemove = function (p0, p1) { return any; };
    JQuery.mouseout = function (p0, p1) { return any; };
    JQuery.mouseover = function (p0, p1) { return any; };
    JQuery.mouseup = function (p0, p1) { return any; };
    JQuery.next = function (p0) { return any; };
    JQuery.nextAll = function (p0) { return any; };
    JQuery.nextUntil = function (p0, p1) { return any; };
    JQuery.not = function (p0) { return any; };
    JQuery.off = function (p0, p1, p2) { return any; };
    JQuery.offset = function (p0) { return join(Coordinates, any); };
    JQuery.offsetParent = function () { return any; };
    JQuery.on = function (p0, p1, p2, p3) { return any; };
    JQuery.one = function (p0, p1, p2, p3) { return any; };
    JQuery.outerHeight = function (p0) { return join(number, any); };
    JQuery.outerWidth = function (p0) { return join(number, any); };
    JQuery.parent = function (p0) { return any; };
    JQuery.parents = function (p0) { return any; };
    JQuery.parentsUntil = function (p0, p1) { return any; };
    JQuery.position = function () { return Coordinates; };
    JQuery.prepend = function (p0) { return any; };
    JQuery.prependTo = function (p0) { return any; };
    JQuery.prev = function (p0) { return any; };
    JQuery.prevAll = function (p0) { return any; };
    JQuery.prevUntil = function (p0, p1) { return any; };
    JQuery.promise = function (p0, p1) { return join(Promise, intersection, intersection); };
    JQuery.prop = function (p0, p1) { return join(any, any); };
    JQuery.pushStack = function (p0, p1, p2) { return any; };
    JQuery.queue = function (p0, p1) { return join(intersection, any); };
    JQuery.ready = function (p0) { return any; };
    JQuery.remove = function (p0) { return any; };
    JQuery.removeAttr = function (p0) { return any; };
    JQuery.removeClass = function (p0) { return any; };
    JQuery.removeData = function (p0) { return any; };
    JQuery.removeProp = function (p0) { return any; };
    JQuery.replaceAll = function (p0) { return any; };
    JQuery.replaceWith = function (p0) { return any; };
    JQuery.resize = function (p0, p1) { return any; };
    JQuery.scroll = function (p0, p1) { return any; };
    JQuery.scrollLeft = function (p0) { return join(number, any); };
    JQuery.scrollTop = function (p0) { return join(number, any); };
    JQuery.select = function (p0, p1) { return any; };
    JQuery.serialize = function () { return string; };
    JQuery.serializeArray = function () { return Array; };
    JQuery.show = function (p0, p1, p2) { return any; };
    JQuery.siblings = function (p0) { return any; };
    JQuery.slice = function (p0, p1) { return any; };
    JQuery.slideDown = function (p0, p1, p2) { return any; };
    JQuery.slideToggle = function (p0, p1, p2) { return any; };
    JQuery.slideUp = function (p0, p1, p2) { return any; };
    JQuery.stop = function (p0, p1, p2) { return any; };
    JQuery.submit = function (p0, p1) { return any; };
    JQuery.text = function (p0) { return join(string, any); };
    JQuery.toArray = function () { return Array; };
    JQuery.toggle = function (p0, p1, p2) { return any; };
    JQuery.toggleClass = function (p0, p1) { return any; };
    JQuery.trigger = function (p0, p1) { return any; };
    JQuery.triggerHandler = function (p0, p1) { return any; };
    JQuery.unbind = function (p0, p1) { return any; };
    JQuery.undelegate = function (p0, p1, p2) { return any; };
    JQuery.unwrap = function (p0) { return any; };
    JQuery.val = function (p0) { return join(union, any); };
    JQuery.width = function (p0) { return join(number, any); };
    JQuery.wrap = function (p0) { return any; };
    JQuery.wrapAll = function (p0) { return any; };
    JQuery.wrapInner = function (p0) { return any; };
    JQueryCallback = {};
    JQueryCallback.add = function (p0, p1) { return any; };
    JQueryCallback.disable = function () { return any; };
    JQueryCallback.disabled = function () { return join(boolean, union); };
    JQueryCallback.empty = function () { return any; };
    JQueryCallback.fire = function (p0) { return any; };
    JQueryCallback.fireWith = function (p0, p1) { return any; };
    JQueryCallback.fired = function () { return join(boolean, union); };
    JQueryCallback.has = function (p0) { return join(boolean, union); };
    JQueryCallback.lock = function () { return any; };
    JQueryCallback.locked = function () { return join(boolean, union); };
    JQueryCallback.remove = function (p0) { return any; };
    JQueryDeferred = {};
    JQueryDeferred.notify = function (p0) { return any; };
    JQueryDeferred.notifyWith = function (p0, p1) { return any; };
    JQueryDeferred.reject = function (p0) { return any; };
    JQueryDeferred.rejectWith = function (p0, p1) { return any; };
    JQueryDeferred.resolve = function (p0) { return any; };
    JQueryDeferred.resolveWith = function (p0, p1) { return any; };
    JQueryDeferred.always = function (p0, p1) { return any; };
    JQueryDeferred.done = function (p0, p1) { return any; };
    JQueryDeferred.fail = function (p0, p1) { return any; };
    JQueryDeferred.progress = function (p0, p1) { return any; };
    JQueryDeferred.promise = function (p0) { return join(Promise, intersection); };
    JQueryDeferred.state = function () { return union; };
    JQueryDeferred.pipe = function (p0, p1, p2) { return join(Promise, Promise, Promise, Promise, Promise, Promise, Promise); };
    JQueryDeferred.then = function (p0, p1, p2) { return join(Promise, Promise, Promise, Promise, Promise, Promise, Promise); };
    JQueryDeferred.catch = function (p0) { return Promise; };
    JQueryEventConstructor = {};
    JQueryEventConstructor.metaKey = join(boolean, union);
    JQueryEventConstructor.namespace = string;
    JQueryEventConstructor.pageX = number;
    JQueryEventConstructor.pageY = number;
    JQueryEventConstructor.result = any;
    JQueryEventConstructor.timeStamp = number;
    JQueryEventConstructor.type = string;
    JQueryEventConstructor.which = number;
    JQueryEventConstructor.isDefaultPrevented = function () { return join(boolean, union); };
    JQueryEventConstructor.isImmediatePropagationStopped = function () { return join(boolean, union); };
    JQueryEventConstructor.isPropagationStopped = function () { return join(boolean, union); };
    JQueryEventConstructor.preventDefault = function () { return void; };
    JQueryEventConstructor.stopImmediatePropagation = function () { return void; };
    JQueryEventConstructor.stopPropagation = function () { return void; };
    JQueryEventConstructor.currentTarget = this;
    JQueryEventConstructor.data = this;
    JQueryEventConstructor.delegateTarget = this;
    JQueryEventConstructor.originalEvent = Event;
    JQueryEventConstructor.relatedTarget = this;
    JQueryEventConstructor.target = this;
    JQueryEventConstructor.altKey = any;
    JQueryEventConstructor.bubbles = any;
    JQueryEventConstructor.cancelable = any;
    JQueryEventConstructor.changedTouches = any;
    JQueryEventConstructor.ctrlKey = any;
    JQueryEventConstructor.detail = any;
    JQueryEventConstructor.eventPhase = any;
    JQueryEventConstructor.shiftKey = any;
    JQueryEventConstructor.view = any;
    JQueryEventConstructor.char = any;
    JQueryEventConstructor.charCode = any;
    JQueryEventConstructor.key = any;
    JQueryEventConstructor.keyCode = any;
    JQueryEventConstructor.button = any;
    JQueryEventConstructor.buttons = any;
    JQueryEventConstructor.clientX = any;
    JQueryEventConstructor.clientY = any;
    JQueryEventConstructor.offsetX = any;
    JQueryEventConstructor.offsetY = any;
    JQueryEventConstructor.pointerId = any;
    JQueryEventConstructor.pointerType = any;
    JQueryEventConstructor.screenX = any;
    JQueryEventConstructor.screenY = any;
    JQueryEventConstructor.targetTouches = any;
    JQueryEventConstructor.toElement = any;
    JQueryEventConstructor.touches = any;
    JQueryDeferred = {};
    JQueryDeferred.notify = function (p0) { return any; };
    JQueryDeferred.notifyWith = function (p0, p1) { return any; };
    JQueryDeferred.reject = function (p0) { return any; };
    JQueryDeferred.rejectWith = function (p0, p1) { return any; };
    JQueryDeferred.resolve = function (p0) { return any; };
    JQueryDeferred.resolveWith = function (p0, p1) { return any; };
    JQueryDeferred.always = function (p0, p1) { return any; };
    JQueryDeferred.done = function (p0, p1) { return any; };
    JQueryDeferred.fail = function (p0, p1) { return any; };
    JQueryDeferred.progress = function (p0, p1) { return any; };
    JQueryDeferred.promise = function (p0) { return join(Promise, intersection); };
    JQueryDeferred.state = function () { return union; };
    JQueryDeferred.pipe = function (p0, p1, p2) { return join(Promise, Promise, Promise, Promise, Promise, Promise, Promise); };
    JQueryDeferred.then = function (p0, p1, p2) { return join(Promise, Promise, Promise, Promise, Promise, Promise, Promise); };
    JQueryDeferred.catch = function (p0) { return Promise; };
    JQueryAjaxSettings = {};
    JQueryAjaxSettings.url = string;
    JQueryAjaxSettings.accepts = PlainObject;
    JQueryAjaxSettings.async = join(boolean, union);
    JQueryAjaxSettings.beforeSend = function (p0, p1) { return union; };
    JQueryAjaxSettings.cache = join(boolean, union);
    JQueryAjaxSettings.complete = union;
    JQueryAjaxSettings.contents = PlainObject;
    JQueryAjaxSettings.contentType = union;
    JQueryAjaxSettings.context = this;
    JQueryAjaxSettings.converters = PlainObject;
    JQueryAjaxSettings.crossDomain = join(boolean, union);
    JQueryAjaxSettings.data = union;
    JQueryAjaxSettings.dataFilter = function (p0, p1) { return any; };
    JQueryAjaxSettings.dataType = string;
    JQueryAjaxSettings.error = union;
    JQueryAjaxSettings.global = join(boolean, union);
    JQueryAjaxSettings.headers = PlainObject;
    JQueryAjaxSettings.ifModified = join(boolean, union);
    JQueryAjaxSettings.isLocal = join(boolean, union);
    JQueryAjaxSettings.jsonp = union;
    JQueryAjaxSettings.jsonpCallback = union;
    JQueryAjaxSettings.method = string;
    JQueryAjaxSettings.mimeType = string;
    JQueryAjaxSettings.password = string;
    JQueryAjaxSettings.processData = join(boolean, union);
    JQueryAjaxSettings.scriptCharset = string;
    JQueryAjaxSettings.statusCode = intersection;
    JQueryAjaxSettings.success = union;
    JQueryAjaxSettings.timeout = number;
    JQueryAjaxSettings.traditional = join(boolean, union);
    JQueryAjaxSettings.type = string;
    JQueryAjaxSettings.username = string;
    JQueryAjaxSettings.xhr = function () { return XMLHttpRequest; };
    JQueryAjaxSettings.xhrFields = XHRFields;
    JQueryAnimationOptions = {};
    JQueryAnimationOptions.always = function (p0, p1) { return void; };
    JQueryAnimationOptions.complete = function () { return void; };
    JQueryAnimationOptions.done = function (p0, p1) { return void; };
    JQueryAnimationOptions.duration = union;
    JQueryAnimationOptions.easing = string;
    JQueryAnimationOptions.fail = function (p0, p1) { return void; };
    JQueryAnimationOptions.progress = function (p0, p1, p2) { return void; };
    JQueryAnimationOptions.queue = union;
    JQueryAnimationOptions.specialEasing = PlainObject;
    JQueryAnimationOptions.start = function (p0) { return void; };
    JQueryAnimationOptions.step = function (p0, p1) { return void; };
    JQueryCoordinates = {};
    JQueryCoordinates.left = number;
    JQueryCoordinates.top = number;
    JQueryGenericPromise = {};
    JQueryGenericPromise.then = function (p0, p1) { return PromiseLike; };
    JQueryXHR = {};
    JQueryXHR.responseJSON = any;
    JQueryXHR.state = function () { return union; };
    JQueryXHR.statusCode = function (p0) { return void; };
    JQueryXHR.always = function (p0, p1) { return any; };
    JQueryXHR.done = function (p0, p1) { return any; };
    JQueryXHR.fail = function (p0, p1) { return any; };
    JQueryXHR.progress = function (p0, p1) { return any; };
    JQueryXHR.promise = function (p0) { return join(any, intersection); };
    JQueryXHR.pipe = function (p0, p1, p2) { return join(Promise3, Promise3, Promise3, Promise3, Promise3, Promise3, Promise3); };
    JQueryXHR.then = function (p0, p1, p2) { return join(PromiseLike, Promise3, Promise3, Promise3, Promise3, Promise3, Promise3, Promise3); };
    JQueryXHR.catch = function (p0) { return Promise3; };
    JQueryXHR.abort = any;
    JQueryXHR.getAllResponseHeaders = any;
    JQueryXHR.getResponseHeader = any;
    JQueryXHR.overrideMimeType = any;
    JQueryXHR.readyState = any;
    JQueryXHR.responseText = any;
    JQueryXHR.setRequestHeader = any;
    JQueryXHR.status = any;
    JQueryXHR.statusText = any;
    JQueryXHR.responseXML = any;
    JQueryPromise = {};
    JQueryPromise.always = function (p0, p1) { return any; };
    JQueryPromise.done = function (p0, p1) { return any; };
    JQueryPromise.fail = function (p0, p1) { return any; };
    JQueryPromise.progress = function (p0, p1) { return any; };
    JQueryPromise.promise = function (p0) { return join(Promise, intersection); };
    JQueryPromise.state = function () { return union; };
    JQueryPromise.pipe = function (p0, p1, p2) { return join(Promise, Promise, Promise, Promise, Promise, Promise, Promise); };
    JQueryPromise.then = function (p0, p1, p2) { return join(Promise, Promise, Promise, Promise, Promise, Promise, Promise); };
    JQueryPromise.catch = function (p0) { return Promise; };
    JQuerySerializeArrayElement = {};
    JQuerySerializeArrayElement.name = string;
    JQuerySerializeArrayElement.value = string;
    JQuerySupport = {};
    JQueryPromiseCallback = function (p0, p1) { return void; };
    JQueryParam = function (p0, p1) { return string; };
    BaseJQueryEventObject = {};
    BaseJQueryEventObject.currentTarget = Element;
    BaseJQueryEventObject.data = any;
    BaseJQueryEventObject.delegateTarget = Element;
    BaseJQueryEventObject.isDefaultPrevented = function () { return join(boolean, union); };
    BaseJQueryEventObject.isImmediatePropagationStopped = function () { return join(boolean, union); };
    BaseJQueryEventObject.isPropagationStopped = function () { return join(boolean, union); };
    BaseJQueryEventObject.namespace = string;
    BaseJQueryEventObject.originalEvent = Event;
    BaseJQueryEventObject.preventDefault = function () { return any; };
    BaseJQueryEventObject.relatedTarget = Element;
    BaseJQueryEventObject.result = any;
    BaseJQueryEventObject.stopImmediatePropagation = function () { return void; };
    BaseJQueryEventObject.stopPropagation = function () { return void; };
    BaseJQueryEventObject.target = Element;
    BaseJQueryEventObject.pageX = number;
    BaseJQueryEventObject.pageY = number;
    BaseJQueryEventObject.which = number;
    BaseJQueryEventObject.metaKey = join(boolean, union);
    BaseJQueryEventObject.bubbles = join(boolean, union);
    BaseJQueryEventObject.cancelable = join(boolean, union);
    BaseJQueryEventObject.cancelBubble = join(boolean, union);
    BaseJQueryEventObject.defaultPrevented = join(boolean, union);
    BaseJQueryEventObject.eventPhase = number;
    BaseJQueryEventObject.isTrusted = join(boolean, union);
    BaseJQueryEventObject.returnValue = join(boolean, union);
    BaseJQueryEventObject.srcElement = Element;
    BaseJQueryEventObject.timeStamp = number;
    BaseJQueryEventObject.type = string;
    BaseJQueryEventObject.scoped = join(boolean, union);
    BaseJQueryEventObject.initEvent = function (p0, p1, p2) { return void; };
    BaseJQueryEventObject.deepPath = function () { return Array; };
    BaseJQueryEventObject.AT_TARGET = number;
    BaseJQueryEventObject.BUBBLING_PHASE = number;
    BaseJQueryEventObject.CAPTURING_PHASE = number;
    JQueryInputEventObject = {};
    JQueryInputEventObject.altKey = join(boolean, union);
    JQueryInputEventObject.ctrlKey = join(boolean, union);
    JQueryInputEventObject.metaKey = join(boolean, union);
    JQueryInputEventObject.shiftKey = join(boolean, union);
    JQueryInputEventObject.currentTarget = Element;
    JQueryInputEventObject.data = any;
    JQueryInputEventObject.delegateTarget = Element;
    JQueryInputEventObject.isDefaultPrevented = function () { return join(boolean, union); };
    JQueryInputEventObject.isImmediatePropagationStopped = function () { return join(boolean, union); };
    JQueryInputEventObject.isPropagationStopped = function () { return join(boolean, union); };
    JQueryInputEventObject.namespace = string;
    JQueryInputEventObject.originalEvent = Event;
    JQueryInputEventObject.preventDefault = function () { return any; };
    JQueryInputEventObject.relatedTarget = Element;
    JQueryInputEventObject.result = any;
    JQueryInputEventObject.stopImmediatePropagation = function () { return void; };
    JQueryInputEventObject.stopPropagation = function () { return void; };
    JQueryInputEventObject.target = Element;
    JQueryInputEventObject.pageX = number;
    JQueryInputEventObject.pageY = number;
    JQueryInputEventObject.which = number;
    JQueryInputEventObject.bubbles = join(boolean, union);
    JQueryInputEventObject.cancelable = join(boolean, union);
    JQueryInputEventObject.cancelBubble = join(boolean, union);
    JQueryInputEventObject.defaultPrevented = join(boolean, union);
    JQueryInputEventObject.eventPhase = number;
    JQueryInputEventObject.isTrusted = join(boolean, union);
    JQueryInputEventObject.returnValue = join(boolean, union);
    JQueryInputEventObject.srcElement = Element;
    JQueryInputEventObject.timeStamp = number;
    JQueryInputEventObject.type = string;
    JQueryInputEventObject.scoped = join(boolean, union);
    JQueryInputEventObject.initEvent = function (p0, p1, p2) { return void; };
    JQueryInputEventObject.deepPath = function () { return Array; };
    JQueryInputEventObject.AT_TARGET = number;
    JQueryInputEventObject.BUBBLING_PHASE = number;
    JQueryInputEventObject.CAPTURING_PHASE = number;
    JQueryMouseEventObject = {};
    JQueryMouseEventObject.button = number;
    JQueryMouseEventObject.clientX = number;
    JQueryMouseEventObject.clientY = number;
    JQueryMouseEventObject.offsetX = number;
    JQueryMouseEventObject.offsetY = number;
    JQueryMouseEventObject.pageX = number;
    JQueryMouseEventObject.pageY = number;
    JQueryMouseEventObject.screenX = number;
    JQueryMouseEventObject.screenY = number;
    JQueryMouseEventObject.altKey = join(boolean, union);
    JQueryMouseEventObject.ctrlKey = join(boolean, union);
    JQueryMouseEventObject.metaKey = join(boolean, union);
    JQueryMouseEventObject.shiftKey = join(boolean, union);
    JQueryMouseEventObject.currentTarget = Element;
    JQueryMouseEventObject.data = any;
    JQueryMouseEventObject.delegateTarget = Element;
    JQueryMouseEventObject.isDefaultPrevented = function () { return join(boolean, union); };
    JQueryMouseEventObject.isImmediatePropagationStopped = function () { return join(boolean, union); };
    JQueryMouseEventObject.isPropagationStopped = function () { return join(boolean, union); };
    JQueryMouseEventObject.namespace = string;
    JQueryMouseEventObject.originalEvent = Event;
    JQueryMouseEventObject.preventDefault = function () { return any; };
    JQueryMouseEventObject.relatedTarget = Element;
    JQueryMouseEventObject.result = any;
    JQueryMouseEventObject.stopImmediatePropagation = function () { return void; };
    JQueryMouseEventObject.stopPropagation = function () { return void; };
    JQueryMouseEventObject.target = Element;
    JQueryMouseEventObject.which = number;
    JQueryMouseEventObject.bubbles = join(boolean, union);
    JQueryMouseEventObject.cancelable = join(boolean, union);
    JQueryMouseEventObject.cancelBubble = join(boolean, union);
    JQueryMouseEventObject.defaultPrevented = join(boolean, union);
    JQueryMouseEventObject.eventPhase = number;
    JQueryMouseEventObject.isTrusted = join(boolean, union);
    JQueryMouseEventObject.returnValue = join(boolean, union);
    JQueryMouseEventObject.srcElement = Element;
    JQueryMouseEventObject.timeStamp = number;
    JQueryMouseEventObject.type = string;
    JQueryMouseEventObject.scoped = join(boolean, union);
    JQueryMouseEventObject.initEvent = function (p0, p1, p2) { return void; };
    JQueryMouseEventObject.deepPath = function () { return Array; };
    JQueryMouseEventObject.AT_TARGET = number;
    JQueryMouseEventObject.BUBBLING_PHASE = number;
    JQueryMouseEventObject.CAPTURING_PHASE = number;
    JQueryKeyEventObject = {};
    JQueryKeyEventObject.char = any;
    JQueryKeyEventObject.charCode = number;
    JQueryKeyEventObject.key = any;
    JQueryKeyEventObject.keyCode = number;
    JQueryKeyEventObject.altKey = join(boolean, union);
    JQueryKeyEventObject.ctrlKey = join(boolean, union);
    JQueryKeyEventObject.metaKey = join(boolean, union);
    JQueryKeyEventObject.shiftKey = join(boolean, union);
    JQueryKeyEventObject.currentTarget = Element;
    JQueryKeyEventObject.data = any;
    JQueryKeyEventObject.delegateTarget = Element;
    JQueryKeyEventObject.isDefaultPrevented = function () { return join(boolean, union); };
    JQueryKeyEventObject.isImmediatePropagationStopped = function () { return join(boolean, union); };
    JQueryKeyEventObject.isPropagationStopped = function () { return join(boolean, union); };
    JQueryKeyEventObject.namespace = string;
    JQueryKeyEventObject.originalEvent = Event;
    JQueryKeyEventObject.preventDefault = function () { return any; };
    JQueryKeyEventObject.relatedTarget = Element;
    JQueryKeyEventObject.result = any;
    JQueryKeyEventObject.stopImmediatePropagation = function () { return void; };
    JQueryKeyEventObject.stopPropagation = function () { return void; };
    JQueryKeyEventObject.target = Element;
    JQueryKeyEventObject.pageX = number;
    JQueryKeyEventObject.pageY = number;
    JQueryKeyEventObject.which = number;
    JQueryKeyEventObject.bubbles = join(boolean, union);
    JQueryKeyEventObject.cancelable = join(boolean, union);
    JQueryKeyEventObject.cancelBubble = join(boolean, union);
    JQueryKeyEventObject.defaultPrevented = join(boolean, union);
    JQueryKeyEventObject.eventPhase = number;
    JQueryKeyEventObject.isTrusted = join(boolean, union);
    JQueryKeyEventObject.returnValue = join(boolean, union);
    JQueryKeyEventObject.srcElement = Element;
    JQueryKeyEventObject.timeStamp = number;
    JQueryKeyEventObject.type = string;
    JQueryKeyEventObject.scoped = join(boolean, union);
    JQueryKeyEventObject.initEvent = function (p0, p1, p2) { return void; };
    JQueryKeyEventObject.deepPath = function () { return Array; };
    JQueryKeyEventObject.AT_TARGET = number;
    JQueryKeyEventObject.BUBBLING_PHASE = number;
    JQueryKeyEventObject.CAPTURING_PHASE = number;
    JQueryEventObject = {};
    JQueryEventObject.currentTarget = Element;
    JQueryEventObject.data = any;
    JQueryEventObject.delegateTarget = Element;
    JQueryEventObject.isDefaultPrevented = function () { return join(boolean, union); };
    JQueryEventObject.isImmediatePropagationStopped = function () { return join(boolean, union); };
    JQueryEventObject.isPropagationStopped = function () { return join(boolean, union); };
    JQueryEventObject.namespace = string;
    JQueryEventObject.originalEvent = Event;
    JQueryEventObject.preventDefault = function () { return any; };
    JQueryEventObject.relatedTarget = Element;
    JQueryEventObject.result = any;
    JQueryEventObject.stopImmediatePropagation = function () { return void; };
    JQueryEventObject.stopPropagation = function () { return void; };
    JQueryEventObject.target = Element;
    JQueryEventObject.pageX = number;
    JQueryEventObject.pageY = number;
    JQueryEventObject.which = number;
    JQueryEventObject.metaKey = join(boolean, union);
    JQueryEventObject.bubbles = join(boolean, union);
    JQueryEventObject.cancelable = join(boolean, union);
    JQueryEventObject.cancelBubble = join(boolean, union);
    JQueryEventObject.defaultPrevented = join(boolean, union);
    JQueryEventObject.eventPhase = number;
    JQueryEventObject.isTrusted = join(boolean, union);
    JQueryEventObject.returnValue = join(boolean, union);
    JQueryEventObject.srcElement = Element;
    JQueryEventObject.timeStamp = number;
    JQueryEventObject.type = string;
    JQueryEventObject.scoped = join(boolean, union);
    JQueryEventObject.initEvent = function (p0, p1, p2) { return void; };
    JQueryEventObject.deepPath = function () { return Array; };
    JQueryEventObject.AT_TARGET = number;
    JQueryEventObject.BUBBLING_PHASE = number;
    JQueryEventObject.CAPTURING_PHASE = number;
    JQueryEventObject.altKey = join(boolean, union);
    JQueryEventObject.ctrlKey = join(boolean, union);
    JQueryEventObject.shiftKey = join(boolean, union);
    JQueryEventObject.button = number;
    JQueryEventObject.clientX = number;
    JQueryEventObject.clientY = number;
    JQueryEventObject.offsetX = number;
    JQueryEventObject.offsetY = number;
    JQueryEventObject.screenX = number;
    JQueryEventObject.screenY = number;
    JQueryEventObject.char = any;
    JQueryEventObject.charCode = number;
    JQueryEventObject.key = any;
    JQueryEventObject.keyCode = number;
    JQueryPromiseOperator = function (p0, p1) { return JQueryPromise; };
    JQueryEasingFunction = function (p0) { return number; };
    JQueryEasingFunctions = {};
    JQueryEasingFunctions.linear = JQueryEasingFunction;
    JQueryEasingFunctions.swing = JQueryEasingFunction;
    jQuery = JQueryStatic;
    $ = JQueryStatic;
}