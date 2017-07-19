System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "web.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/regenerator",
      "babel-runtime/core-js/object/keys",
      "react",
      "react-dom",
      "./TextMaker.js",
      "base64-arraybuffer",
      "three",
      "google-fonts-complete",
      "three-orbit-controls"
    ],
    "npm:base64-arraybuffer@0.1.5.js": [
      "npm:base64-arraybuffer@0.1.5/lib/base64-arraybuffer"
    ],
    "npm:babel-runtime@5.8.38/helpers/get.js": [
      "../core-js/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.38/helpers/inherits.js": [
      "../core-js/object/create",
      "../core-js/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/helpers/create-class.js": [
      "../core-js/object/define-property"
    ],
    "npm:babel-runtime@5.8.38/regenerator.js": [
      "./regenerator/index"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/keys.js": [
      "core-js/library/fn/object/keys"
    ],
    "npm:react@15.6.1.js": [
      "npm:react@15.6.1/react.js"
    ],
    "npm:react-dom@15.6.1.js": [
      "npm:react-dom@15.6.1/index.js"
    ],
    "TextMaker.js": [
      "babel-runtime/core-js/get-iterator",
      "opentype.js",
      "base64-arraybuffer",
      "three",
      "Doodle3D/ThreeJS-export-STL"
    ],
    "npm:three-orbit-controls@82.1.0.js": [
      "npm:three-orbit-controls@82.1.0/index.js"
    ],
    "npm:three@0.86.0.js": [
      "npm:three@0.86.0/build/three.js"
    ],
    "npm:google-fonts-complete@1.1.1.js": [
      "npm:google-fonts-complete@1.1.1/./google-fonts.json!systemjs-json"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js": [
      "core-js/library/fn/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/create.js": [
      "core-js/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js": [
      "core-js/library/fn/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/define-property.js": [
      "core-js/library/fn/object/define-property"
    ],
    "npm:babel-runtime@5.8.38/regenerator/index.js": [
      "./runtime"
    ],
    "npm:core-js@1.2.7/library/fn/object/keys.js": [
      "../../modules/es6.object.keys",
      "../../modules/$.core"
    ],
    "npm:react@15.6.1/react.js": [
      "./lib/React"
    ],
    "npm:react-dom@15.6.1/index.js": [
      "./lib/ReactDOM"
    ],
    "npm:opentype.js@0.7.3.js": [
      "npm:opentype.js@0.7.3/dist/opentype.js"
    ],
    "npm:babel-runtime@5.8.38/core-js/get-iterator.js": [
      "core-js/library/fn/get-iterator"
    ],
    "github:Doodle3D/ThreeJS-export-STL@0.0.1.js": [
      "github:Doodle3D/ThreeJS-export-STL@0.0.1/index.js"
    ],
    "npm:three@0.86.0/build/three.js": [
      "buffer",
      "process"
    ],
    "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js": [
      "../../modules/$",
      "../../modules/es6.object.get-own-property-descriptor"
    ],
    "npm:core-js@1.2.7/library/fn/object/create.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js": [
      "../../modules/es6.object.set-prototype-of",
      "../../modules/$.core"
    ],
    "npm:core-js@1.2.7/library/fn/object/define-property.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.keys.js": [
      "./$.to-object",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/library/fn/get-iterator.js": [
      "../modules/web.dom.iterable",
      "../modules/es6.string.iterator",
      "../modules/core.get-iterator"
    ],
    "npm:babel-runtime@5.8.38/regenerator/runtime.js": [
      "../core-js/symbol",
      "../core-js/object/create",
      "../core-js/object/set-prototype-of",
      "../core-js/promise",
      "process"
    ],
    "npm:react@15.6.1/lib/React.js": [
      "object-assign",
      "./ReactBaseClasses",
      "./ReactChildren",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactPropTypes",
      "./ReactVersion",
      "./createClass",
      "./onlyChild",
      "./lowPriorityWarning",
      "./canDefineProperty",
      "./ReactElementValidator",
      "process"
    ],
    "npm:opentype.js@0.7.3/dist/opentype.js": [
      "@empty",
      "buffer",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOM.js": [
      "./ReactDOMComponentTree",
      "./ReactDefaultInjection",
      "./ReactMount",
      "./ReactReconciler",
      "./ReactUpdates",
      "./ReactVersion",
      "./findDOMNode",
      "./getHostComponentFromComposite",
      "./renderSubtreeIntoContainer",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "./ReactDOMUnknownPropertyHook",
      "./ReactDOMNullInputValuePropHook",
      "./ReactDOMInvalidARIAHook",
      "process"
    ],
    "github:jspm/nodelibs-buffer@0.1.1.js": [
      "github:jspm/nodelibs-buffer@0.1.1/index"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:object-assign@4.1.1.js": [
      "npm:object-assign@4.1.1/index"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js": [
      "./$.to-iobject",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-object.js": [
      "./$.defined"
    ],
    "npm:core-js@1.2.7/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/library/modules/web.dom.iterable.js": [
      "./es6.array.iterator",
      "./$.iterators"
    ],
    "npm:core-js@1.2.7/library/modules/core.get-iterator.js": [
      "./$.an-object",
      "./core.get-iterator-method",
      "./$.core"
    ],
    "npm:core-js@1.2.7/library/modules/es6.string.iterator.js": [
      "./$.string-at",
      "./$.iter-define"
    ],
    "npm:babel-runtime@5.8.38/core-js/symbol.js": [
      "core-js/library/fn/symbol"
    ],
    "npm:babel-runtime@5.8.38/core-js/promise.js": [
      "core-js/library/fn/promise"
    ],
    "npm:react-dom@15.6.1/lib/ReactDefaultInjection.js": [
      "./ARIADOMPropertyConfig",
      "./BeforeInputEventPlugin",
      "./ChangeEventPlugin",
      "./DefaultEventPluginOrder",
      "./EnterLeaveEventPlugin",
      "./HTMLDOMPropertyConfig",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMComponent",
      "./ReactDOMComponentTree",
      "./ReactDOMEmptyComponent",
      "./ReactDOMTreeTraversal",
      "./ReactDOMTextComponent",
      "./ReactDefaultBatchingStrategy",
      "./ReactEventListener",
      "./ReactInjection",
      "./ReactReconcileTransaction",
      "./SVGDOMPropertyConfig",
      "./SelectEventPlugin",
      "./SimpleEventPlugin"
    ],
    "npm:react-dom@15.6.1/lib/getHostComponentFromComposite.js": [
      "./ReactNodeTypes"
    ],
    "npm:react-dom@15.6.1/lib/renderSubtreeIntoContainer.js": [
      "./ReactMount"
    ],
    "npm:react@15.6.1/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "process"
    ],
    "npm:react@15.6.1/lib/lowPriorityWarning.js": [
      "process"
    ],
    "npm:react@15.6.1/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:fbjs@0.8.12/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactInstrumentation.js": [
      "./ReactDebugTool",
      "process"
    ],
    "npm:react@15.6.1/lib/ReactBaseClasses.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactNoopUpdateQueue",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "./lowPriorityWarning",
      "process"
    ],
    "npm:react@15.6.1/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@15.6.1/lib/ReactElement.js": [
      "object-assign",
      "./ReactCurrentOwner",
      "fbjs/lib/warning",
      "./canDefineProperty",
      "./ReactElementSymbol",
      "process"
    ],
    "npm:react@15.6.1/lib/ReactPropTypes.js": [
      "./ReactElement",
      "prop-types/factory"
    ],
    "npm:react@15.6.1/lib/createClass.js": [
      "./ReactBaseClasses",
      "./ReactElement",
      "./ReactNoopUpdateQueue",
      "create-react-class/factory"
    ],
    "npm:react@15.6.1/lib/onlyChild.js": [
      "./reactProdInvariant",
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.6.1/lib/ReactElementValidator.js": [
      "./ReactCurrentOwner",
      "./ReactComponentTreeHook",
      "./ReactElement",
      "./checkReactTypeSpec",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "./lowPriorityWarning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMComponentTree.js": [
      "./reactProdInvariant",
      "./DOMProperty",
      "./ReactDOMComponentFlags",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactMount.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "./DOMProperty",
      "react/lib/React",
      "./ReactBrowserEventEmitter",
      "react/lib/ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactDOMContainerInfo",
      "./ReactDOMFeatureFlags",
      "./ReactFeatureFlags",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactMarkupChecksum",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "./setInnerHTML",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactReconciler.js": [
      "./ReactRef",
      "./ReactInstrumentation",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactUpdates.js": [
      "./reactProdInvariant",
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactFeatureFlags",
      "./ReactReconciler",
      "./Transaction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/findDOMNode.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactInstanceMap",
      "./getHostComponentFromComposite",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMUnknownPropertyHook.js": [
      "./DOMProperty",
      "./EventPluginRegistry",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMNullInputValuePropHook.js": [
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMInvalidARIAHook.js": [
      "./DOMProperty",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "github:jspm/nodelibs-buffer@0.1.1/index.js": [
      "buffer"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-iobject.js": [
      "./$.iobject",
      "./$.defined"
    ],
    "npm:core-js@1.2.7/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "npm:core-js@1.2.7/library/modules/$.set-proto.js": [
      "./$",
      "./$.is-object",
      "./$.an-object",
      "./$.ctx"
    ],
    "npm:core-js@1.2.7/library/modules/es6.array.iterator.js": [
      "./$.add-to-unscopables",
      "./$.iter-step",
      "./$.iterators",
      "./$.to-iobject",
      "./$.iter-define"
    ],
    "npm:core-js@1.2.7/library/modules/$.an-object.js": [
      "./$.is-object"
    ],
    "npm:core-js@1.2.7/library/modules/core.get-iterator-method.js": [
      "./$.classof",
      "./$.wks",
      "./$.iterators",
      "./$.core"
    ],
    "npm:core-js@1.2.7/library/modules/$.string-at.js": [
      "./$.to-integer",
      "./$.defined"
    ],
    "npm:core-js@1.2.7/library/modules/$.iter-define.js": [
      "./$.library",
      "./$.export",
      "./$.redefine",
      "./$.hide",
      "./$.has",
      "./$.iterators",
      "./$.iter-create",
      "./$.set-to-string-tag",
      "./$",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/library/fn/symbol.js": [
      "./symbol/index"
    ],
    "npm:core-js@1.2.7/library/fn/promise.js": [
      "../modules/es6.object.to-string",
      "../modules/es6.string.iterator",
      "../modules/web.dom.iterable",
      "../modules/es6.promise",
      "../modules/$.core"
    ],
    "npm:react-dom@15.6.1/lib/EnterLeaveEventPlugin.js": [
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticMouseEvent"
    ],
    "npm:react-dom@15.6.1/lib/HTMLDOMPropertyConfig.js": [
      "./DOMProperty"
    ],
    "npm:react-dom@15.6.1/lib/ReactInjection.js": [
      "./DOMProperty",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./ReactComponentEnvironment",
      "./ReactEmptyComponent",
      "./ReactBrowserEventEmitter",
      "./ReactHostComponent",
      "./ReactUpdates"
    ],
    "npm:prop-types@15.5.10/factory.js": [
      "./factoryWithTypeCheckers"
    ],
    "npm:react-dom@15.6.1/lib/DOMLazyTree.js": [
      "./DOMNamespaces",
      "./setInnerHTML",
      "./createMicrosoftUnsafeLocalFunction",
      "./setTextContent"
    ],
    "npm:react-dom@15.6.1/lib/ReactMarkupChecksum.js": [
      "./adler32"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMEmptyComponent.js": [
      "object-assign",
      "./DOMLazyTree",
      "./ReactDOMComponentTree"
    ],
    "npm:react-dom@15.6.1/lib/ReactComponentBrowserEnvironment.js": [
      "./DOMChildrenOperations",
      "./ReactDOMIDOperations",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactReconcileTransaction.js": [
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactBrowserEventEmitter",
      "./ReactInputSelection",
      "./ReactInstrumentation",
      "./Transaction",
      "./ReactUpdateQueue",
      "process"
    ],
    "npm:fbjs@0.8.12/lib/emptyObject.js": [
      "process"
    ],
    "npm:fbjs@0.8.12/lib/invariant.js": [
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactBrowserEventEmitter.js": [
      "object-assign",
      "./EventPluginRegistry",
      "./ReactEventEmitterMixin",
      "./ViewportMetrics",
      "./getVendorPrefixedEventName",
      "./isEventSupported",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMContainerInfo.js": [
      "./validateDOMNesting",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactRef.js": [
      "./ReactOwner",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/BeforeInputEventPlugin.js": [
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./FallbackCompositionState",
      "./SyntheticCompositionEvent",
      "./SyntheticInputEvent"
    ],
    "npm:react-dom@15.6.1/lib/ChangeEventPlugin.js": [
      "./EventPluginHub",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./inputValueTracking",
      "./getEventTarget",
      "./isEventSupported",
      "./isTextInputElement",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./AutoFocusUtils",
      "./CSSPropertyOperations",
      "./DOMLazyTree",
      "./DOMNamespaces",
      "./DOMProperty",
      "./DOMPropertyOperations",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./ReactBrowserEventEmitter",
      "./ReactDOMComponentFlags",
      "./ReactDOMComponentTree",
      "./ReactDOMInput",
      "./ReactDOMOption",
      "./ReactDOMSelect",
      "./ReactDOMTextarea",
      "./ReactInstrumentation",
      "./ReactMultiChild",
      "./ReactServerRenderingTransaction",
      "fbjs/lib/emptyFunction",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./isEventSupported",
      "fbjs/lib/shallowEqual",
      "./inputValueTracking",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMTreeTraversal.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMTextComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DOMChildrenOperations",
      "./DOMLazyTree",
      "./ReactDOMComponentTree",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./validateDOMNesting",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDefaultBatchingStrategy.js": [
      "object-assign",
      "./ReactUpdates",
      "./Transaction",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react-dom@15.6.1/lib/ReactEventListener.js": [
      "object-assign",
      "fbjs/lib/EventListener",
      "fbjs/lib/ExecutionEnvironment",
      "./PooledClass",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./getEventTarget",
      "fbjs/lib/getUnboundedScrollPosition",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/SelectEventPlugin.js": [
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactInputSelection",
      "./SyntheticEvent",
      "fbjs/lib/getActiveElement",
      "./isTextInputElement",
      "fbjs/lib/shallowEqual"
    ],
    "npm:react-dom@15.6.1/lib/SimpleEventPlugin.js": [
      "./reactProdInvariant",
      "fbjs/lib/EventListener",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticAnimationEvent",
      "./SyntheticClipboardEvent",
      "./SyntheticEvent",
      "./SyntheticFocusEvent",
      "./SyntheticKeyboardEvent",
      "./SyntheticMouseEvent",
      "./SyntheticDragEvent",
      "./SyntheticTouchEvent",
      "./SyntheticTransitionEvent",
      "./SyntheticUIEvent",
      "./SyntheticWheelEvent",
      "fbjs/lib/emptyFunction",
      "./getEventCharCode",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactNodeTypes.js": [
      "./reactProdInvariant",
      "react/lib/React",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDebugTool.js": [
      "./ReactInvalidSetStateWarningHook",
      "./ReactHostOperationHistoryHook",
      "react/lib/ReactComponentTreeHook",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/performanceNow",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.6.1/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.6.1/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.6.1/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactElementSymbol",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:create-react-class@15.6.0/factory.js": [
      "object-assign",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.6.1/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:react@15.6.1/lib/ReactComponentTreeHook.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/DOMProperty.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactUpdateQueue.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/instantiateReactComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactCompositeComponent",
      "./ReactEmptyComponent",
      "./ReactHostComponent",
      "react/lib/getNextDebugID",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/setInnerHTML.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./DOMNamespaces",
      "./createMicrosoftUnsafeLocalFunction",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/CallbackQueue.js": [
      "./reactProdInvariant",
      "./PooledClass",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/Transaction.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/EventPluginRegistry.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:buffer@5.0.6.js": [
      "npm:buffer@5.0.6/index.js"
    ],
    "npm:process@0.11.10.js": [
      "npm:process@0.11.10/browser.js"
    ],
    "npm:core-js@1.2.7/library/modules/$.iobject.js": [
      "./$.cof"
    ],
    "npm:core-js@1.2.7/library/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "npm:core-js@1.2.7/library/modules/$.classof.js": [
      "./$.cof",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/library/modules/$.wks.js": [
      "./$.shared",
      "./$.uid",
      "./$.global"
    ],
    "npm:core-js@1.2.7/library/modules/$.redefine.js": [
      "./$.hide"
    ],
    "npm:core-js@1.2.7/library/modules/$.hide.js": [
      "./$",
      "./$.property-desc",
      "./$.descriptors"
    ],
    "npm:core-js@1.2.7/library/modules/$.iter-create.js": [
      "./$",
      "./$.property-desc",
      "./$.set-to-string-tag",
      "./$.hide",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js": [
      "./$",
      "./$.has",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/library/fn/symbol/index.js": [
      "../../modules/es6.symbol",
      "../../modules/es6.object.to-string",
      "../../modules/$.core"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticMouseEvent.js": [
      "./SyntheticUIEvent",
      "./ViewportMetrics",
      "./getEventModifierState"
    ],
    "npm:react-dom@15.6.1/lib/ReactEventEmitterMixin.js": [
      "./EventPluginHub"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticCompositionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticInputEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.6.1/lib/inputValueTracking.js": [
      "./ReactDOMComponentTree"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticAnimationEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticClipboardEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticFocusEvent.js": [
      "./SyntheticUIEvent"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticKeyboardEvent.js": [
      "./SyntheticUIEvent",
      "./getEventCharCode",
      "./getEventKey",
      "./getEventModifierState"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticDragEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticTouchEvent.js": [
      "./SyntheticUIEvent",
      "./getEventModifierState"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticTransitionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticUIEvent.js": [
      "./SyntheticEvent",
      "./getEventTarget"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticWheelEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:fbjs@0.8.12/lib/performanceNow.js": [
      "./performance"
    ],
    "npm:react-dom@15.6.1/lib/FallbackCompositionState.js": [
      "object-assign",
      "./PooledClass",
      "./getTextContentAccessor"
    ],
    "npm:core-js@1.2.7/library/modules/es6.promise.js": [
      "./$",
      "./$.library",
      "./$.global",
      "./$.ctx",
      "./$.classof",
      "./$.export",
      "./$.is-object",
      "./$.an-object",
      "./$.a-function",
      "./$.strict-new",
      "./$.for-of",
      "./$.set-proto",
      "./$.same-value",
      "./$.wks",
      "./$.species-constructor",
      "./$.microtask",
      "./$.descriptors",
      "./$.redefine-all",
      "./$.set-to-string-tag",
      "./$.set-species",
      "./$.core",
      "./$.iter-detect",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/DOMChildrenOperations.js": [
      "./DOMLazyTree",
      "./Danger",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./createMicrosoftUnsafeLocalFunction",
      "./setInnerHTML",
      "./setTextContent",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMIDOperations.js": [
      "./DOMChildrenOperations",
      "./ReactDOMComponentTree",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactServerRenderingTransaction.js": [
      "object-assign",
      "./PooledClass",
      "./Transaction",
      "./ReactInstrumentation",
      "./ReactServerUpdateQueue",
      "process"
    ],
    "npm:fbjs@0.8.12/lib/EventListener.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@15.6.1/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react-dom@15.6.1/lib/EventPropagators.js": [
      "./EventPluginHub",
      "./EventPluginUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/EventPluginHub.js": [
      "./reactProdInvariant",
      "./EventPluginRegistry",
      "./EventPluginUtils",
      "./ReactErrorUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/EventPluginUtils.js": [
      "./reactProdInvariant",
      "./ReactErrorUtils",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactComponentEnvironment.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactHostComponent.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:prop-types@15.5.10/factoryWithTypeCheckers.js": [
      "fbjs/lib/emptyFunction",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "./lib/ReactPropTypesSecret",
      "./checkPropTypes",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/setTextContent.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./escapeTextContentForBrowser",
      "./setInnerHTML"
    ],
    "npm:react-dom@15.6.1/lib/ReactInputSelection.js": [
      "./ReactDOMSelection",
      "fbjs/lib/containsNode",
      "fbjs/lib/focusNode",
      "fbjs/lib/getActiveElement"
    ],
    "npm:react-dom@15.6.1/lib/isEventSupported.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.6.1/lib/getVendorPrefixedEventName.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.6.1/lib/validateDOMNesting.js": [
      "object-assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactOwner.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/SyntheticEvent.js": [
      "object-assign",
      "./PooledClass",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/AutoFocusUtils.js": [
      "./ReactDOMComponentTree",
      "fbjs/lib/focusNode"
    ],
    "npm:react-dom@15.6.1/lib/CSSPropertyOperations.js": [
      "./CSSProperty",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "fbjs/lib/camelizeStyleName",
      "./dangerousStyleValue",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/memoizeStringOnly",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/DOMPropertyOperations.js": [
      "./DOMProperty",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./quoteAttributeValueForBrowser",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMSelect.js": [
      "object-assign",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMInput.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DOMPropertyOperations",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMOption.js": [
      "object-assign",
      "react/lib/React",
      "./ReactDOMComponentTree",
      "./ReactDOMSelect",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMTextarea.js": [
      "./reactProdInvariant",
      "object-assign",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactMultiChild.js": [
      "./reactProdInvariant",
      "./ReactComponentEnvironment",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "react/lib/ReactCurrentOwner",
      "./ReactReconciler",
      "./ReactChildReconciler",
      "fbjs/lib/emptyFunction",
      "./flattenChildren",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactInvalidSetStateWarningHook.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactCompositeComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "react/lib/React",
      "./ReactComponentEnvironment",
      "react/lib/ReactCurrentOwner",
      "./ReactErrorUtils",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactNodeTypes",
      "./ReactReconciler",
      "./checkReactTypeSpec",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/shallowEqual",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:buffer@5.0.6/index.js": [
      "base64-js",
      "ieee754"
    ],
    "npm:core-js@1.2.7/library/modules/$.shared.js": [
      "./$.global"
    ],
    "npm:core-js@1.2.7/library/modules/$.descriptors.js": [
      "./$.fails"
    ],
    "npm:core-js@1.2.7/library/modules/es6.symbol.js": [
      "./$",
      "./$.global",
      "./$.has",
      "./$.descriptors",
      "./$.export",
      "./$.redefine",
      "./$.fails",
      "./$.shared",
      "./$.set-to-string-tag",
      "./$.uid",
      "./$.wks",
      "./$.keyof",
      "./$.get-names",
      "./$.enum-keys",
      "./$.is-array",
      "./$.an-object",
      "./$.to-iobject",
      "./$.property-desc",
      "./$.library"
    ],
    "npm:fbjs@0.8.12/lib/performance.js": [
      "./ExecutionEnvironment"
    ],
    "npm:react-dom@15.6.1/lib/getEventKey.js": [
      "./getEventCharCode"
    ],
    "npm:core-js@1.2.7/library/modules/$.for-of.js": [
      "./$.ctx",
      "./$.iter-call",
      "./$.is-array-iter",
      "./$.an-object",
      "./$.to-length",
      "./core.get-iterator-method"
    ],
    "npm:core-js@1.2.7/library/modules/$.species-constructor.js": [
      "./$.an-object",
      "./$.a-function",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/library/modules/$.set-species.js": [
      "./$.core",
      "./$",
      "./$.descriptors",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/library/modules/$.redefine-all.js": [
      "./$.redefine"
    ],
    "npm:core-js@1.2.7/library/modules/$.iter-detect.js": [
      "./$.wks"
    ],
    "npm:fbjs@0.8.12/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:fbjs@0.8.12/lib/camelizeStyleName.js": [
      "./camelize"
    ],
    "npm:fbjs@0.8.12/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:react-dom@15.6.1/lib/quoteAttributeValueForBrowser.js": [
      "./escapeTextContentForBrowser"
    ],
    "npm:core-js@1.2.7/library/modules/$.microtask.js": [
      "./$.global",
      "./$.task",
      "./$.cof",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactErrorUtils.js": [
      "process"
    ],
    "npm:react-dom@15.6.1/lib/getTextContentAccessor.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react-dom@15.6.1/lib/Danger.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/createNodesFromMarkup",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactServerUpdateQueue.js": [
      "./ReactUpdateQueue",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/accumulateInto.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:prop-types@15.5.10/checkPropTypes.js": [
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "./lib/ReactPropTypesSecret",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactDOMSelection.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./getNodeForCharacterOffset",
      "./getTextContentAccessor"
    ],
    "npm:react-dom@15.6.1/lib/dangerousStyleValue.js": [
      "./CSSProperty",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/LinkedValueUtils.js": [
      "./reactProdInvariant",
      "./ReactPropTypesSecret",
      "prop-types/factory",
      "react/lib/React",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactChildReconciler.js": [
      "./ReactReconciler",
      "./instantiateReactComponent",
      "./KeyEscapeUtils",
      "./shouldUpdateReactComponent",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/flattenChildren.js": [
      "./KeyEscapeUtils",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "react/lib/ReactComponentTreeHook",
      "process"
    ],
    "npm:base64-js@1.2.1.js": [
      "npm:base64-js@1.2.1/index.js"
    ],
    "npm:ieee754@1.1.8.js": [
      "npm:ieee754@1.1.8/index.js"
    ],
    "npm:core-js@1.2.7/library/modules/$.keyof.js": [
      "./$",
      "./$.to-iobject"
    ],
    "npm:core-js@1.2.7/library/modules/$.iter-call.js": [
      "./$.an-object"
    ],
    "npm:core-js@1.2.7/library/modules/$.get-names.js": [
      "./$.to-iobject",
      "./$"
    ],
    "npm:core-js@1.2.7/library/modules/$.enum-keys.js": [
      "./$"
    ],
    "npm:core-js@1.2.7/library/modules/$.is-array.js": [
      "./$.cof"
    ],
    "npm:core-js@1.2.7/library/modules/$.is-array-iter.js": [
      "./$.iterators",
      "./$.wks"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-length.js": [
      "./$.to-integer"
    ],
    "npm:fbjs@0.8.12/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:core-js@1.2.7/library/modules/$.task.js": [
      "./$.ctx",
      "./$.invoke",
      "./$.html",
      "./$.dom-create",
      "./$.global",
      "./$.cof",
      "process"
    ],
    "npm:fbjs@0.8.12/lib/createNodesFromMarkup.js": [
      "./ExecutionEnvironment",
      "./createArrayFromMixed",
      "./getMarkupWrap",
      "./invariant",
      "process"
    ],
    "npm:react-dom@15.6.1/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react-dom@15.6.1/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "react/lib/ReactCurrentOwner",
      "./ReactElementSymbol",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/$.dom-create.js": [
      "./$.is-object",
      "./$.global"
    ],
    "npm:core-js@1.2.7/library/modules/$.html.js": [
      "./$.global"
    ],
    "npm:fbjs@0.8.12/lib/createArrayFromMixed.js": [
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.8.12/lib/getMarkupWrap.js": [
      "./ExecutionEnvironment",
      "./invariant",
      "process"
    ]
  },

  map: {
    "Doodle3D/ThreeJS-export-STL": "github:Doodle3D/ThreeJS-export-STL@0.0.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
    "core-js": "npm:core-js@1.2.7",
    "fs": "github:jspm/nodelibs-fs@0.1.2",
    "google-fonts-complete": "npm:google-fonts-complete@1.1.1",
    "jspm-loader-jsx": "npm:jspm-loader-jsx@0.0.7",
    "opentype.js": "npm:opentype.js@0.7.3",
    "optimist": "npm:optimist@0.6.1",
    "react": "npm:react@15.6.1",
    "react-dom": "npm:react-dom@15.6.1",
    "request": "npm:request@2.81.0",
    "three": "npm:three@0.86.0",
    "three-orbit-controls": "npm:three-orbit-controls@82.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.1"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.4.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:acorn@4.0.13": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ajv@4.11.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "co": "npm:co@4.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.6": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:asynckit@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base62@1.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "tweetnacl": "npm:tweetnacl@0.14.5"
    },
    "npm:bn.js@4.11.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:brace-expansion@1.1.8": {
      "balanced-match": "npm:balanced-match@1.0.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.7",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:camel-case@1.2.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.11.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.11.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.5.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "iconv-lite": "npm:iconv-lite@0.4.18",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.5.0",
      "recast": "npm:recast@0.11.23",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-react-class@15.6.0": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.1": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.12",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:dashdash@1.14.1": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.5.0": {
      "acorn": "npm:acorn@4.0.13",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.1"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.3",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "iconv-lite": "npm:iconv-lite@0.4.18"
    },
    "npm:envify@3.4.1": {
      "jstransform": "npm:jstransform@11.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:esprima-fb@15001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@3.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fbjs@0.8.12": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.3.1",
      "setimmediate": "npm:setimmediate@1.0.5",
      "ua-parser-js": "npm:ua-parser-js@0.7.13"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@2.1.4": {
      "asynckit": "npm:asynckit@0.4.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.15",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:getpass@0.1.7": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.4",
      "once": "npm:once@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:google-fonts-complete@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "postcss": "npm:postcss@4.1.16",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:graceful-fs@4.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:har-schema@1.0.5": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:har-validator@4.2.1": {
      "ajv": "npm:ajv@4.11.8",
      "har-schema": "npm:har-schema@1.0.5"
    },
    "npm:hash-base@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.3": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:hawk@3.1.3": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@1.1.1": {
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.4.0",
      "sshpk": "npm:sshpk@1.13.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.18": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inflight@1.0.6": {
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.7.1",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.3"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:json-stable-stringify@1.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "pascal-case": "npm:pascal-case@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.13.3",
      "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
    },
    "npm:jsprim@1.4.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:jstransform@11.0.3": {
      "base62": "npm:base62@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commoner": "npm:commoner@0.10.8",
      "esprima-fb": "npm:esprima-fb@15001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:mime-db@1.27.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.15": {
      "mime-db": "npm:mime-db@1.27.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.4": {
      "brace-expansion": "npm:brace-expansion@1.1.8",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.7.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:oauth-sign@0.8.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:once@1.4.0": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:opentype.js@0.7.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tiny-inflate": "npm:tiny-inflate@1.0.2"
    },
    "npm:optimist@0.6.1": {
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wordwrap": "npm:wordwrap@0.0.3"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.12",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:pascal-case@1.1.2": {
      "camel-case": "npm:camel-case@1.2.2",
      "upper-case-first": "npm:upper-case-first@1.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:performance-now@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss@4.1.16": {
      "es6-promise": "npm:es6-promise@2.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.3.1": {
      "asap": "npm:asap@2.0.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:prop-types@15.5.10": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:react-dom@15.6.1": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.10",
      "react": "npm:react@15.6.1"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "envify": "npm:envify@3.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@15.6.1": {
      "create-react-class": "npm:create-react-class@15.6.0",
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.10"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.0.3",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:recast@0.11.23": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.9.6",
      "esprima": "npm:esprima@3.1.3",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:request@2.81.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.6.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "caseless": "npm:caseless@0.12.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.1",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@2.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@4.2.1",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.15",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "performance-now": "npm:performance-now@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.4.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.2",
      "tunnel-agent": "npm:tunnel-agent@0.6.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "uuid": "npm:uuid@3.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:ripemd160@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@2.0.2",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:safe-buffer@5.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:sentence-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.4"
    },
    "npm:setimmediate@1.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sshpk@1.13.1": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@1.0.0",
      "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.14.1",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "getpass": "npm:getpass@0.1.7",
      "jsbn": "npm:jsbn@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.14.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:three@0.86.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:tiny-inflate@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:tough-cookie@2.3.2": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "npm:punycode@1.4.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ua-parser-js@0.7.13": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:upper-case-first@1.1.2": {
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@3.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
