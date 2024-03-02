import { useSSRContext, mergeProps, withCtx, renderSlot, computed, watch, onMounted, onUnmounted, createVNode, openBlock, createBlock, useSlots, ref, createTextVNode, unref, Fragment, renderList, toDisplayString, createCommentVNode, resolveComponent, withModifiers, nextTick, withKeys, reactive, withDirectives, vShow, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderTeleport, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { useForm, usePage, Link, Head, router, createInertiaApp } from "@inertiajs/vue3";
import route$1 from "ziggy-js";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import videojs from "video.js";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$M = {
  __name: "ActionMessage",
  __ssrInlineRender: true,
  props: {
    on: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(__props.on ? null : { display: "none" })}" class="text-sm text-gray-600 dark:text-gray-400">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ActionMessage.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$L = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:col-span-1 flex justify-between" }, _attrs))}><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-400">`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div><div class="px-4 sm:px-0">`);
  ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SectionTitle.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const SectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$K = {
  __name: "ActionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "title")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "description")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="mt-5 md:mt-0 md:col-span-2"><div class="px-4 py-5 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ActionSection.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        type: "checkbox",
        value: __props.value,
        class: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(() => props.show, () => {
      if (props.show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    });
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        "sm": "sm:max-w-sm",
        "md": "sm:max-w-md",
        "lg": "sm:max-w-lg",
        "xl": "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {
  __name: "ConfirmationModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$I, mergeProps({
        show: __props.show,
        "max-width": __props.maxWidth,
        closeable: __props.closeable,
        onClose: close
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"${_scopeId}><svg class="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</h3><div class="mt-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div></div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
                createVNode("div", { class: "sm:flex sm:items-start" }, [
                  createVNode("div", { class: "mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                    (openBlock(), createBlock("svg", {
                      class: "h-6 w-6 text-red-600 dark:text-red-400",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                    createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, [
                      renderSlot(_ctx.$slots, "title")
                    ]),
                    createVNode("div", { class: "mt-4 text-sm text-gray-600 dark:text-gray-400" }, [
                      renderSlot(_ctx.$slots, "content")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ConfirmationModal.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = {
  __name: "DangerButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = {
  __name: "DialogModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$I, mergeProps({
        show: __props.show,
        "max-width": __props.maxWidth,
        closeable: __props.closeable,
        onClose: close
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-6 py-4"${_scopeId}><div class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="mt-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-6 py-4" }, [
                createVNode("div", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, [
                  renderSlot(_ctx.$slots, "title")
                ]),
                createVNode("div", { class: "mt-4 text-sm text-gray-600 dark:text-gray-400" }, [
                  renderSlot(_ctx.$slots, "content")
                ])
              ]),
              createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DialogModal.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = {
  __name: "FormSection",
  __ssrInlineRender: true,
  emits: ["submitted"],
  setup(__props) {
    const hasActions = computed(() => !!useSlots().actions);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "title")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "description")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="mt-5 md:mt-0 md:col-span-2"><form><div class="${ssrRenderClass([hasActions.value ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md", "px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 shadow"])}"><div class="grid grid-cols-6 gap-6">`);
      ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (hasActions.value) {
        _push(`<div class="flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FormSection.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600 dark:text-red-400">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700 dark:text-gray-300" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden sm:block" }, _attrs))}><div class="py-8"><div class="border-t border-gray-200 dark:border-gray-700"></div></div></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SectionBorder.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const SectionBorder = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$y = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        ref_key: "input",
        ref: input,
        class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",
        value: __props.modelValue
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = {
  __name: "ApiTokenManager",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    const props = __props;
    const createApiTokenForm = useForm({
      name: "",
      permissions: props.defaultPermissions
    });
    const updateApiTokenForm = useForm({
      permissions: []
    });
    const deleteApiTokenForm = useForm({});
    const displayingToken = ref(false);
    const managingPermissionsFor = ref(null);
    const apiTokenBeingDeleted = ref(null);
    const createApiToken = () => {
      createApiTokenForm.post(route("api-tokens.store"), {
        preserveScroll: true,
        onSuccess: () => {
          displayingToken.value = true;
          createApiTokenForm.reset();
        }
      });
    };
    const manageApiTokenPermissions = (token) => {
      updateApiTokenForm.permissions = token.abilities;
      managingPermissionsFor.value = token;
    };
    const updateApiToken = () => {
      updateApiTokenForm.put(route("api-tokens.update", managingPermissionsFor.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => managingPermissionsFor.value = null
      });
    };
    const confirmApiTokenDeletion = (token) => {
      apiTokenBeingDeleted.value = token;
    };
    const deleteApiToken = () => {
      deleteApiTokenForm.delete(route("api-tokens.destroy", apiTokenBeingDeleted.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => apiTokenBeingDeleted.value = null
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$E, { onSubmitted: createApiToken }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create API Token `);
          } else {
            return [
              createTextVNode(" Create API Token ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API tokens allow third-party services to authenticate with our application on your behalf. `);
          } else {
            return [
              createTextVNode(" API tokens allow third-party services to authenticate with our application on your behalf. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "name",
              modelValue: unref(createApiTokenForm).name,
              "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              message: unref(createApiTokenForm).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.availablePermissions.length > 0) {
              _push2(`<div class="col-span-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$C, {
                for: "permissions",
                value: "Permissions"
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.availablePermissions, (permission) => {
                _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$J, {
                  checked: unref(createApiTokenForm).permissions,
                  "onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event,
                  value: permission
                }, null, _parent2, _scopeId));
                _push2(`<span class="ml-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$C, {
                  for: "name",
                  value: "Name"
                }),
                createVNode(_sfc_main$y, {
                  id: "name",
                  modelValue: unref(createApiTokenForm).name,
                  "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  autofocus: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$D, {
                  message: unref(createApiTokenForm).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              __props.availablePermissions.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6"
              }, [
                createVNode(_sfc_main$C, {
                  for: "permissions",
                  value: "Permissions"
                }),
                createVNode("div", { class: "mt-2 grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.availablePermissions, (permission) => {
                    return openBlock(), createBlock("div", { key: permission }, [
                      createVNode("label", { class: "flex items-center" }, [
                        createVNode(_sfc_main$J, {
                          checked: unref(createApiTokenForm).permissions,
                          "onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event,
                          value: permission
                        }, null, 8, ["checked", "onUpdate:checked", "value"]),
                        createVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(permission), 1)
                      ])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$M, {
              on: unref(createApiTokenForm).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Created. `);
                } else {
                  return [
                    createTextVNode(" Created. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: { "opacity-25": unref(createApiTokenForm).processing },
              disabled: unref(createApiTokenForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create `);
                } else {
                  return [
                    createTextVNode(" Create ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$M, {
                on: unref(createApiTokenForm).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Created. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$B, {
                class: { "opacity-25": unref(createApiTokenForm).processing },
                disabled: unref(createApiTokenForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Create ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.tokens.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(SectionBorder, null, null, _parent));
        _push(`<div class="mt-10 sm:mt-0">`);
        _push(ssrRenderComponent(_sfc_main$K, null, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Manage API Tokens `);
            } else {
              return [
                createTextVNode(" Manage API Tokens ")
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` You may delete any of your existing tokens if they are no longer needed. `);
            } else {
              return [
                createTextVNode(" You may delete any of your existing tokens if they are no longer needed. ")
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.tokens, (token) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="break-all dark:text-white"${_scopeId}>${ssrInterpolate(token.name)}</div><div class="flex items-center ml-2"${_scopeId}>`);
                if (token.last_used_ago) {
                  _push2(`<div class="text-sm text-gray-400"${_scopeId}> Last used ${ssrInterpolate(token.last_used_ago)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.availablePermissions.length > 0) {
                  _push2(`<button class="cursor-pointer ml-6 text-sm text-gray-400 underline"${_scopeId}> Permissions </button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500"${_scopeId}> Delete </button></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.tokens, (token) => {
                    return openBlock(), createBlock("div", {
                      key: token.id,
                      class: "flex items-center justify-between"
                    }, [
                      createVNode("div", { class: "break-all dark:text-white" }, toDisplayString(token.name), 1),
                      createVNode("div", { class: "flex items-center ml-2" }, [
                        token.last_used_ago ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-gray-400"
                        }, " Last used " + toDisplayString(token.last_used_ago), 1)) : createCommentVNode("", true),
                        __props.availablePermissions.length > 0 ? (openBlock(), createBlock("button", {
                          key: 1,
                          class: "cursor-pointer ml-6 text-sm text-gray-400 underline",
                          onClick: ($event) => manageApiTokenPermissions(token)
                        }, " Permissions ", 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode("button", {
                          class: "cursor-pointer ml-6 text-sm text-red-500",
                          onClick: ($event) => confirmApiTokenDeletion(token)
                        }, " Delete ", 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$F, {
        show: displayingToken.value,
        onClose: ($event) => displayingToken.value = false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API Token `);
          } else {
            return [
              createTextVNode(" API Token ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}> Please copy your new API token. For your security, it won&#39;t be shown again. </div>`);
            if (_ctx.$page.props.jetstream.flash.token) {
              _push2(`<div class="mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"${_scopeId}>${ssrInterpolate(_ctx.$page.props.jetstream.flash.token)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", null, " Please copy your new API token. For your security, it won't be shown again. "),
              _ctx.$page.props.jetstream.flash.token ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"
              }, toDisplayString(_ctx.$page.props.jetstream.flash.token), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$A, {
              onClick: ($event) => displayingToken.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$A, {
                onClick: ($event) => displayingToken.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$F, {
        show: managingPermissionsFor.value != null,
        onClose: ($event) => managingPermissionsFor.value = null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API Token Permissions `);
          } else {
            return [
              createTextVNode(" API Token Permissions ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.availablePermissions, (permission) => {
              _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$J, {
                checked: unref(updateApiTokenForm).permissions,
                "onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event,
                value: permission
              }, null, _parent2, _scopeId));
              _push2(`<span class="ml-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.availablePermissions, (permission) => {
                  return openBlock(), createBlock("div", { key: permission }, [
                    createVNode("label", { class: "flex items-center" }, [
                      createVNode(_sfc_main$J, {
                        checked: unref(updateApiTokenForm).permissions,
                        "onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event,
                        value: permission
                      }, null, 8, ["checked", "onUpdate:checked", "value"]),
                      createVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(permission), 1)
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$A, {
              onClick: ($event) => managingPermissionsFor.value = null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: ["ml-3", { "opacity-25": unref(updateApiTokenForm).processing }],
              disabled: unref(updateApiTokenForm).processing,
              onClick: updateApiToken
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$A, {
                onClick: ($event) => managingPermissionsFor.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$B, {
                class: ["ml-3", { "opacity-25": unref(updateApiTokenForm).processing }],
                disabled: unref(updateApiTokenForm).processing,
                onClick: updateApiToken
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$H, {
        show: apiTokenBeingDeleted.value != null,
        onClose: ($event) => apiTokenBeingDeleted.value = null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete API Token `);
          } else {
            return [
              createTextVNode(" Delete API Token ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Are you sure you would like to delete this API token? `);
          } else {
            return [
              createTextVNode(" Are you sure you would like to delete this API token? ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$A, {
              onClick: ($event) => apiTokenBeingDeleted.value = null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              class: ["ml-3", { "opacity-25": unref(deleteApiTokenForm).processing }],
              disabled: unref(deleteApiTokenForm).processing,
              onClick: deleteApiToken
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete `);
                } else {
                  return [
                    createTextVNode(" Delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$A, {
                onClick: ($event) => apiTokenBeingDeleted.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$G, {
                class: ["ml-3", { "opacity-25": unref(deleteApiTokenForm).processing }],
                disabled: unref(deleteApiTokenForm).processing,
                onClick: deleteApiToken
              }, {
                default: withCtx(() => [
                  createTextVNode(" Delete ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Partials/ApiTokenManager.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"></path></svg>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationMark.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const ApplicationMark = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$v = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(true);
    const style = computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
    });
    const message = computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.banner) || "";
    });
    watch(message, async () => {
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && message.value) {
        _push(`<div class="${ssrRenderClass({ "bg-indigo-500": style.value == "success", "bg-red-700": style.value == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-indigo-600": style.value == "success", "bg-red-600": style.value == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (style.value == "success") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (style.value == "danger") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ml-3 font-medium text-sm text-white truncate">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-indigo-600 focus:bg-indigo-600": style.value == "success", "hover:bg-red-600 focus:bg-red-600": style.value == "danger" }, "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Banner.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    active: Boolean,
    href: String,
    as: String
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-left text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button class="${ssrRenderClass([classes.value, "w-full text-left"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: classes.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$v, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-100 dark:bg-gray-900"><nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: unref(route$1)("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationMark, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationMark, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$u, {
        href: unref(route$1)("home"),
        active: unref(route$1)().current("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$u, {
        href: unref(route$1)("library"),
        active: unref(route$1)().current("library")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mirrored Images and Videos `);
          } else {
            return [
              createTextVNode(" Mirrored Images and Videos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$u, {
        href: unref(route$1)("reddit"),
        active: unref(route$1)().current("reddit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reddit Downloader `);
          } else {
            return [
              createTextVNode(" Reddit Downloader ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$t, {
        href: unref(route$1)("home"),
        active: unref(route$1)().current("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$t, {
        href: unref(route$1)("library"),
        active: unref(route$1)().current("library")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mirrored Images and Videos `);
          } else {
            return [
              createTextVNode(" Mirrored Images and Videos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$t, {
        href: unref(route$1)("reddit"),
        active: unref(route$1)().current("reddit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reddit Downloader `);
          } else {
            return [
              createTextVNode(" Reddit Downloader ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white dark:bg-gray-800 shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "API Tokens" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> API Tokens </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " API Tokens ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$x, {
              tokens: __props.tokens,
              "available-permissions": __props.availablePermissions,
              "default-permissions": __props.defaultPermissions
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode(_sfc_main$x, {
                    tokens: __props.tokens,
                    "available-permissions": __props.availablePermissions,
                    "default-permissions": __props.defaultPermissions
                  }, null, 8, ["tokens", "available-permissions", "default-permissions"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  props: {
    title: String,
    video_url: String,
    has_audio: Boolean
  },
  data() {
    return {
      processing: false,
      ffmpeg: createFFmpeg({ log: true })
    };
  },
  methods: {
    getFileExtension(url) {
      return url.split(".").pop().split(/\#|\?/)[0];
    },
    async processFile() {
      this.processing = true;
      try {
        const fileExtension = this.getFileExtension(this.video_url);
        console.log("File extension:", fileExtension);
        if (["jpeg", "jpg", "gif", "png"].includes(fileExtension)) {
          const response = await fetch(this.video_url);
          const imageBlob = await response.blob();
          const tempLink = document.createElement("a");
          tempLink.href = URL.createObjectURL(imageBlob);
          tempLink.setAttribute("download", `archivevideomirror_image.${fileExtension}`);
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
        } else {
          if (!this.ffmpeg.isLoaded()) {
            await this.ffmpeg.load();
          }
          this.ffmpeg.FS("writeFile", "video.mp4", await fetchFile(this.video_url));
          if (this.has_audio) {
            const baseUrl = this.video_url.substring(0, this.video_url.lastIndexOf("/") + 1);
            const audioUrl = `${baseUrl}DASH_AUDIO_128.mp4`;
            console.log("Audio URL:", audioUrl);
            this.ffmpeg.FS("writeFile", "audio.mp4", await fetchFile(audioUrl));
            await this.ffmpeg.run("-i", "video.mp4", "-i", "audio.mp4", "-c:v", "copy", "-c:a", "aac", "output.mp4");
          } else {
            await this.ffmpeg.run("-i", "video.mp4", "-c", "copy", "output.mp4");
          }
          const data = this.ffmpeg.FS("readFile", "output.mp4");
          const blob = new Blob([data.buffer], { type: "video/mp4" });
          const tempLink = document.createElement("a");
          tempLink.href = URL.createObjectURL(blob);
          tempLink.setAttribute("download", "archivevideomirror_video.mp4");
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
        }
      } catch (error) {
        console.error("Error processing file:", error);
        alert("There was an error processing the file.");
      } finally {
        this.processing = false;
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"${ssrIncludeBooleanAttr($data.processing) ? " disabled" : ""}>${ssrInterpolate($data.processing ? "Processing..." : "Download")}</button></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/VideoAudioMixer.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VideoAudioMixer = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$p = {
  __name: "ArchiveVideo",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    video_url: {
      type: String
    },
    has_audio: {
      type: String
    },
    is_nsfw: {
      type: String
    },
    upvotes: {
      type: String
    },
    upvote_ratio: {
      type: String
    },
    author: {
      type: String
    },
    subreddit: {
      type: String
    },
    post_id: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_center = resolveComponent("center");
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Welcome" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_center, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"${_scopeId2}><div class="flex justify-end px-4 pt-4"${_scopeId2}></div><div class="flex flex-col items-center pb-10"${_scopeId2}><img class="w-24 h-24 mb-3 rounded-full shadow-lg" crossorigin="anonymous" src="https://img.icons8.com/doodle/48/question-mark--v1.png" alt="Question"${_scopeId2}><h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(props == null ? void 0 : props.title)}</h5><br${_scopeId2}><span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>Mirroring will save a permanent copy of the video on our servers. Downloading will download a copy of the video to your browser. Mirroring may take a <b${_scopeId2}>few minutes</b>, downloading will take a <b${_scopeId2}>few seconds</b>. Download button may not work properly for images, you may have to mirror first and then download.</span><div class="flex mt-4 md:mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VideoAudioMixer, {
                    title: props.title,
                    video_url: props.video_url,
                    has_audio: props.has_audio
                  }, null, _parent3, _scopeId2));
                  _push3(`<a${ssrRenderAttr("href", `/mirror/reddit/${__props.subreddit}/${__props.post_id}`)} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"${_scopeId2}>Mirror (~3 min)</a></div><br${_scopeId2}><span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}><b${_scopeId2}>Video Statistics</b></span><span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>Upvotes: ${ssrInterpolate(props == null ? void 0 : props.upvotes)} (Ratio: ${ssrInterpolate(props == null ? void 0 : props.upvote_ratio)}%)</span><span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>Post Author: ${ssrInterpolate(props == null ? void 0 : props.author)}</span><span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>Post Subreddit: ${ssrInterpolate(props == null ? void 0 : props.subreddit)}</span><span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>Marked as NSFW: ${ssrInterpolate(props == null ? void 0 : props.is_nsfw)}</span><br${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" }, [
                      createVNode("div", { class: "flex justify-end px-4 pt-4" }),
                      createVNode("div", { class: "flex flex-col items-center pb-10" }, [
                        createVNode("img", {
                          class: "w-24 h-24 mb-3 rounded-full shadow-lg",
                          crossorigin: "anonymous",
                          src: "https://img.icons8.com/doodle/48/question-mark--v1.png",
                          alt: "Question"
                        }),
                        createVNode("h5", { class: "mb-1 text-xl font-medium text-gray-900 dark:text-white" }, toDisplayString(props == null ? void 0 : props.title), 1),
                        createVNode("br"),
                        createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                          createTextVNode("Mirroring will save a permanent copy of the video on our servers. Downloading will download a copy of the video to your browser. Mirroring may take a "),
                          createVNode("b", null, "few minutes"),
                          createTextVNode(", downloading will take a "),
                          createVNode("b", null, "few seconds"),
                          createTextVNode(". Download button may not work properly for images, you may have to mirror first and then download.")
                        ]),
                        createVNode("div", { class: "flex mt-4 md:mt-6" }, [
                          createVNode(VideoAudioMixer, {
                            title: props.title,
                            video_url: props.video_url,
                            has_audio: props.has_audio
                          }, null, 8, ["title", "video_url", "has_audio"]),
                          createVNode("a", {
                            href: `/mirror/reddit/${__props.subreddit}/${__props.post_id}`,
                            class: "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                          }, "Mirror (~3 min)", 8, ["href"])
                        ]),
                        createVNode("br"),
                        createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                          createVNode("b", null, "Video Statistics")
                        ]),
                        createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Upvotes: " + toDisplayString(props == null ? void 0 : props.upvotes) + " (Ratio: " + toDisplayString(props == null ? void 0 : props.upvote_ratio) + "%)", 1),
                        createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Post Author: " + toDisplayString(props == null ? void 0 : props.author), 1),
                        createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Post Subreddit: " + toDisplayString(props == null ? void 0 : props.subreddit), 1),
                        createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Marked as NSFW: " + toDisplayString(props == null ? void 0 : props.is_nsfw), 1),
                        createVNode("br")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode(_component_center, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" }, [
                        createVNode("div", { class: "flex justify-end px-4 pt-4" }),
                        createVNode("div", { class: "flex flex-col items-center pb-10" }, [
                          createVNode("img", {
                            class: "w-24 h-24 mb-3 rounded-full shadow-lg",
                            crossorigin: "anonymous",
                            src: "https://img.icons8.com/doodle/48/question-mark--v1.png",
                            alt: "Question"
                          }),
                          createVNode("h5", { class: "mb-1 text-xl font-medium text-gray-900 dark:text-white" }, toDisplayString(props == null ? void 0 : props.title), 1),
                          createVNode("br"),
                          createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                            createTextVNode("Mirroring will save a permanent copy of the video on our servers. Downloading will download a copy of the video to your browser. Mirroring may take a "),
                            createVNode("b", null, "few minutes"),
                            createTextVNode(", downloading will take a "),
                            createVNode("b", null, "few seconds"),
                            createTextVNode(". Download button may not work properly for images, you may have to mirror first and then download.")
                          ]),
                          createVNode("div", { class: "flex mt-4 md:mt-6" }, [
                            createVNode(VideoAudioMixer, {
                              title: props.title,
                              video_url: props.video_url,
                              has_audio: props.has_audio
                            }, null, 8, ["title", "video_url", "has_audio"]),
                            createVNode("a", {
                              href: `/mirror/reddit/${__props.subreddit}/${__props.post_id}`,
                              class: "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                            }, "Mirror (~3 min)", 8, ["href"])
                          ]),
                          createVNode("br"),
                          createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                            createVNode("b", null, "Video Statistics")
                          ]),
                          createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Upvotes: " + toDisplayString(props == null ? void 0 : props.upvotes) + " (Ratio: " + toDisplayString(props == null ? void 0 : props.upvote_ratio) + "%)", 1),
                          createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Post Author: " + toDisplayString(props == null ? void 0 : props.author), 1),
                          createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Post Subreddit: " + toDisplayString(props == null ? void 0 : props.subreddit), 1),
                          createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Marked as NSFW: " + toDisplayString(props == null ? void 0 : props.is_nsfw), 1),
                          createVNode("br")
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ArchiveVideo.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push, _parent);
  _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthenticationCard.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const AuthenticationCard = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$n = {
  __name: "AuthenticationCardLogo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({ href: "/" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"${_scopeId}></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-16 h-16",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",
                  fill: "#6875F5"
                }),
                createVNode("path", {
                  d: "M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",
                  fill: "#6875F5"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthenticationCardLogo.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const passwordInput = ref(null);
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => {
          form.reset();
          passwordInput.value.focus();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Secure Area" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(_sfc_main$B, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_sfc_main$B, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$J, {
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$J, {
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event,
                      name: "remember"
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-400" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(_sfc_main$B, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$C, { for: "terms" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$J, {
                      id: "terms",
                      checked: unref(form).terms,
                      "onUpdate:checked": ($event) => unref(form).terms = $event,
                      name: "terms",
                      required: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="ml-2"${_scopeId2}> I agree to the <a target="_blank"${ssrRenderAttr("href", _ctx.route("terms.show"))} class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"${_scopeId2}>Terms of Service</a> and <a target="_blank"${ssrRenderAttr("href", _ctx.route("policy.show"))} class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"${_scopeId2}>Privacy Policy</a></div></div>`);
                    _push3(ssrRenderComponent(_sfc_main$D, {
                      class: "mt-2",
                      message: unref(form).errors.terms
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$J, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                          }, "Terms of Service", 8, ["href"]),
                          createTextVNode(" and "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                          }, "Privacy Policy", 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$D, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    type: "text",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4"
                }, [
                  createVNode(_sfc_main$C, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$J, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                          }, "Terms of Service", 8, ["href"]),
                          createTextVNode(" and "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                          }, "Privacy Policy", 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$D, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$B, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_sfc_main$B, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  __name: "TwoFactorChallenge",
  __ssrInlineRender: true,
  setup(__props) {
    const recovery = ref(false);
    const form = useForm({
      code: "",
      recovery_code: ""
    });
    const recoveryCodeInput = ref(null);
    const codeInput = ref(null);
    const toggleRecovery = async () => {
      recovery.value ^= true;
      await nextTick();
      if (recovery.value) {
        recoveryCodeInput.value.focus();
        form.code = "";
      } else {
        codeInput.value.focus();
        form.recovery_code = "";
      }
    };
    const submit = () => {
      form.post(route("two-factor.login"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Two-factor Confirmation" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[--> Please confirm access to your account by entering the authentication code provided by your authenticator application. <!--]-->`);
            } else {
              _push2(`<!--[--> Please confirm access to your account by entering one of your emergency recovery codes. <!--]-->`);
            }
            _push2(`</div><form${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$C, {
                for: "code",
                value: "Code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$y, {
                id: "code",
                ref_key: "codeInput",
                ref: codeInput,
                modelValue: unref(form).code,
                "onUpdate:modelValue": ($event) => unref(form).code = $event,
                type: "text",
                inputmode: "numeric",
                class: "mt-1 block w-full",
                autofocus: "",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$D, {
                class: "mt-2",
                message: unref(form).errors.code
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$C, {
                for: "recovery_code",
                value: "Recovery Code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$y, {
                id: "recovery_code",
                ref_key: "recoveryCodeInput",
                ref: recoveryCodeInput,
                modelValue: unref(form).recovery_code,
                "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                type: "text",
                class: "mt-1 block w-full",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$D, {
                class: "mt-2",
                message: unref(form).errors.recovery_code
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}><button type="button" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[--> Use a recovery code <!--]-->`);
            } else {
              _push2(`<!--[--> Use an authentication code <!--]-->`);
            }
            _push2(`</button>`);
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, [
                !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                ], 64))
              ]),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                !recovery.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_sfc_main$C, {
                    for: "code",
                    value: "Code"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "code",
                    ref_key: "codeInput",
                    ref: codeInput,
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    type: "text",
                    inputmode: "numeric",
                    class: "mt-1 block w-full",
                    autofocus: "",
                    autocomplete: "one-time-code"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.code
                  }, null, 8, ["message"])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$C, {
                    for: "recovery_code",
                    value: "Recovery Code"
                  }),
                  createVNode(_sfc_main$y, {
                    id: "recovery_code",
                    ref_key: "recoveryCodeInput",
                    ref: recoveryCodeInput,
                    modelValue: unref(form).recovery_code,
                    "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                    type: "text",
                    class: "mt-1 block w-full",
                    autocomplete: "one-time-code"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.recovery_code
                  }, null, 8, ["message"])
                ])),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode("button", {
                    type: "button",
                    class: "text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer",
                    onClick: withModifiers(toggleRecovery, ["prevent"])
                  }, [
                    !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" Use a recovery code ")
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(" Use an authentication code ")
                    ], 64))
                  ]),
                  createVNode(_sfc_main$B, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}> A new verification link has been sent to the email address you provided in your profile settings. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.show"),
              class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit Profile`);
                } else {
                  return [
                    createTextVNode(" Edit Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ml-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
              }, " A new verification link has been sent to the email address you provided in your profile settings. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(_sfc_main$B, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode("div", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.show"),
                      class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Edit Profile")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("logout"),
                      method: "post",
                      as: "button",
                      class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Log Out ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Download Reddit Videos" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<meta name="description" content="Download and mirror Reddit videos in the highest quality possible with audio for completely free! Save or archive videos on our platform for free."${_scopeId2}>`);
                } else {
                  return [
                    createVNode("meta", {
                      name: "description",
                      content: "Download and mirror Reddit videos in the highest quality possible with audio for completely free! Save or archive videos on our platform for free."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Archive Video Mirror </h2>`);
          } else {
            return [
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  createVNode("meta", {
                    name: "description",
                    content: "Download and mirror Reddit videos in the highest quality possible with audio for completely free! Save or archive videos on our platform for free."
                  })
                ]),
                _: 1
              }),
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Archive Video Mirror ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4"${_scopeId}><div class="text-gray-600 dark:text-gray-400"${_scopeId}><p${_scopeId}>Welcome to Archive Video Mirror, the premier platform for securely archiving and mirroring your favorite videos. Our service ensures that you never lose access to valuable content, providing a reliable backup and easy retrieval of your videos.</p></div><h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200"${_scopeId}>Features</h3><ul class="list-disc list-inside text-gray-600 dark:text-gray-400"${_scopeId}><li${_scopeId}>High-quality video mirroring and archiving</li><li${_scopeId}>User-friendly interface for easy navigation and management</li><li${_scopeId}>Secure storage with advanced encryption</li><li${_scopeId}>Quick retrieval and playback of archived videos</li><li${_scopeId}>Support for multiple video formats</li></ul><h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200"${_scopeId}>How It Works</h3><p class="text-gray-600 dark:text-gray-400"${_scopeId}>Simply upload your videos to our platform, and we handle the rest. Our system mirrors your videos, storing them securely and making them easily accessible to you at any time for as long as we can store them for. You can also download videos, free of charge.</p></div><br${_scopeId}><div class="bg-blue-500 text-white p-4 rounded"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Get Started with AVM Today</h3><p${_scopeId}>Start mirroring and downloading your videos on a variety of websites!</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4" }, [
                    createVNode("div", { class: "text-gray-600 dark:text-gray-400" }, [
                      createVNode("p", null, "Welcome to Archive Video Mirror, the premier platform for securely archiving and mirroring your favorite videos. Our service ensures that you never lose access to valuable content, providing a reliable backup and easy retrieval of your videos.")
                    ]),
                    createVNode("h3", { class: "text-lg font-semibold text-gray-800 dark:text-gray-200" }, "Features"),
                    createVNode("ul", { class: "list-disc list-inside text-gray-600 dark:text-gray-400" }, [
                      createVNode("li", null, "High-quality video mirroring and archiving"),
                      createVNode("li", null, "User-friendly interface for easy navigation and management"),
                      createVNode("li", null, "Secure storage with advanced encryption"),
                      createVNode("li", null, "Quick retrieval and playback of archived videos"),
                      createVNode("li", null, "Support for multiple video formats")
                    ]),
                    createVNode("h3", { class: "text-lg font-semibold text-gray-800 dark:text-gray-200" }, "How It Works"),
                    createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Simply upload your videos to our platform, and we handle the rest. Our system mirrors your videos, storing them securely and making them easily accessible to you at any time for as long as we can store them for. You can also download videos, free of charge.")
                  ]),
                  createVNode("br"),
                  createVNode("div", { class: "bg-blue-500 text-white p-4 rounded" }, [
                    createVNode("h3", { class: "text-lg font-semibold" }, "Get Started with AVM Today"),
                    createVNode("p", null, "Start mirroring and downloading your videos on a variety of websites!")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  data() {
    return {
      redditUrl: ""
    };
  },
  methods: {
    handleSubmit() {
      let inputUrl = this.redditUrl;
      if (!inputUrl.match(/^[a-zA-Z]+:\/\//)) {
        inputUrl = "https://" + inputUrl;
      }
      try {
        const url = new URL(inputUrl);
        const path = url.pathname;
        if (path) {
          console.log(path);
          this.$inertia.visit(path);
        } else {
          alert("Invalid Reddit URL");
        }
      } catch (e) {
        alert("Invalid URL format");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label><div class="relative"><div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input type="search"${ssrRenderAttr("value", $data.redditUrl)} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Download Reddit URL..." required><button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enter</button></div></form>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/RedditRedirectForm.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const RedditRedirectForm = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender]]);
const __default__$2 = {
  props: {
    errors: Array
  }
};
setTimeout(function() {
  window.location.reload(1);
}, 5e3);
const _sfc_main$c = /* @__PURE__ */ Object.assign(__default__$2, {
  __name: "PendingMirror",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    video_url: {
      type: String
    },
    has_audio: {
      type: String
    },
    is_nsfw: {
      type: String
    },
    upvotes: {
      type: String
    },
    upvote_ratio: {
      type: String
    },
    author: {
      type: String
    },
    subreddit: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Reddit Video Downloader" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Reddit Video Downloader with Audio </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Reddit Video Downloader with Audio ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4"${_scopeId}><div class="text-gray-600 dark:text-gray-400"${_scopeId}><p${_scopeId}>This video is currently pending a mirror to our server and will automatically refresh once the video has finished mirroring. You may also download this video instantly if you do not want to wait for a mirror.</p><br${_scopeId}><p${_scopeId}><b${_scopeId}>Video Title:</b> ${ssrInterpolate((_a = _ctx.$props) == null ? void 0 : _a.title)}</p><p${_scopeId}><b${_scopeId}>Adult Only:</b> ${ssrInterpolate((_b = _ctx.$props) == null ? void 0 : _b.is_nsfw)}</p><p${_scopeId}><b${_scopeId}>Upvotes:</b> ${ssrInterpolate((_c = _ctx.$props) == null ? void 0 : _c.upvotes)}</p><p${_scopeId}><b${_scopeId}>Upvote Ratio:</b> ${ssrInterpolate((_d = _ctx.$props) == null ? void 0 : _d.upvote_ratio)}%</p><p${_scopeId}><b${_scopeId}>Author:</b> ${ssrInterpolate((_e = _ctx.$props) == null ? void 0 : _e.author)}</p><p${_scopeId}><b${_scopeId}>Subreddit:</b> ${ssrInterpolate((_f = _ctx.$props) == null ? void 0 : _f.subreddit)}</p><br${_scopeId}>`);
            _push2(ssrRenderComponent(VideoAudioMixer, {
              title: props.title,
              video_url: props.video_url,
              has_audio: props.has_audio
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4" }, [
                    createVNode("div", { class: "text-gray-600 dark:text-gray-400" }, [
                      createVNode("p", null, "This video is currently pending a mirror to our server and will automatically refresh once the video has finished mirroring. You may also download this video instantly if you do not want to wait for a mirror."),
                      createVNode("br"),
                      createVNode("p", null, [
                        createVNode("b", null, "Video Title:"),
                        createTextVNode(" " + toDisplayString((_g = _ctx.$props) == null ? void 0 : _g.title), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Adult Only:"),
                        createTextVNode(" " + toDisplayString((_h = _ctx.$props) == null ? void 0 : _h.is_nsfw), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Upvotes:"),
                        createTextVNode(" " + toDisplayString((_i = _ctx.$props) == null ? void 0 : _i.upvotes), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Upvote Ratio:"),
                        createTextVNode(" " + toDisplayString((_j = _ctx.$props) == null ? void 0 : _j.upvote_ratio) + "%", 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Author:"),
                        createTextVNode(" " + toDisplayString((_k = _ctx.$props) == null ? void 0 : _k.author), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Subreddit:"),
                        createTextVNode(" " + toDisplayString((_l = _ctx.$props) == null ? void 0 : _l.subreddit), 1)
                      ]),
                      createVNode("br"),
                      createVNode(VideoAudioMixer, {
                        title: props.title,
                        video_url: props.video_url,
                        has_audio: props.has_audio
                      }, null, 8, ["title", "video_url", "has_audio"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PendingMirror.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  props: {
    policy: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Privacy Policy" }, null, _parent));
      _push(`<div class="font-sans text-gray-900 dark:text-gray-100 antialiased"><div class="pt-4 bg-gray-100 dark:bg-gray-900"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
      _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg prose dark:prose-invert">${__props.policy}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      setTimeout(() => passwordInput.value.focus(), 250);
    };
    const deleteUser = () => {
      form.delete(route("current-user.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete Account `);
          } else {
            return [
              createTextVNode(" Delete Account ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Permanently delete your account. `);
          } else {
            return [
              createTextVNode(" Permanently delete your account. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, { onClick: confirmUserDeletion }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$F, {
              show: confirmingUserDeletion.value,
              onClose: closeModal
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. <div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$y, {
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    autocomplete: "current-password",
                    onKeyup: deleteUser
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$D, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$y, {
                        ref_key: "passwordInput",
                        ref: passwordInput,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password",
                        class: "mt-1 block w-3/4",
                        placeholder: "Password",
                        autocomplete: "current-password",
                        onKeyup: withKeys(deleteUser, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$D, {
                        message: unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$A, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$G, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete Account `);
                      } else {
                        return [
                          createTextVNode(" Delete Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$A, { onClick: closeModal }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$G, {
                      class: ["ml-3", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing,
                      onClick: deleteUser
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Delete Account ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600 dark:text-gray-400" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. "),
              createVNode("div", { class: "mt-5" }, [
                createVNode(_sfc_main$G, { onClick: confirmUserDeletion }, {
                  default: withCtx(() => [
                    createTextVNode(" Delete Account ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_sfc_main$F, {
                show: confirmingUserDeletion.value,
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(" Delete Account ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$y, {
                      ref_key: "passwordInput",
                      ref: passwordInput,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      class: "mt-1 block w-3/4",
                      placeholder: "Password",
                      autocomplete: "current-password",
                      onKeyup: withKeys(deleteUser, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$D, {
                      message: unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_sfc_main$A, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$G, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "LogoutOtherBrowserSessionsForm",
  __ssrInlineRender: true,
  props: {
    sessions: Array
  },
  setup(__props) {
    const confirmingLogout = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmLogout = () => {
      confirmingLogout.value = true;
      setTimeout(() => passwordInput.value.focus(), 250);
    };
    const logoutOtherBrowserSessions = () => {
      form.delete(route("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingLogout.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browser Sessions `);
          } else {
            return [
              createTextVNode(" Browser Sessions ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage and log out your active sessions on other browsers and devices. `);
          } else {
            return [
              createTextVNode(" Manage and log out your active sessions on other browsers and devices. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}> If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. </div>`);
            if (__props.sessions.length > 0) {
              _push2(`<div class="mt-5 space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.sessions, (session, i) => {
                _push2(`<div class="flex items-center"${_scopeId}><div${_scopeId}>`);
                if (session.agent.is_desktop) {
                  _push2(`<svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"${_scopeId}></path></svg>`);
                }
                _push2(`</div><div class="ml-3"${_scopeId}><div class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(session.agent.platform ? session.agent.platform : "Unknown")} - ${ssrInterpolate(session.agent.browser ? session.agent.browser : "Unknown")}</div><div${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(session.ip_address)}, `);
                if (session.is_current_device) {
                  _push2(`<span class="text-green-500 font-semibold"${_scopeId}>This device</span>`);
                } else {
                  _push2(`<span${_scopeId}>Last active ${ssrInterpolate(session.last_active)}</span>`);
                }
                _push2(`</div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$B, { onClick: confirmLogout }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out Other Browser Sessions `);
                } else {
                  return [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$M, {
              on: unref(form).recentlySuccessful,
              class: "ml-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Done. `);
                } else {
                  return [
                    createTextVNode(" Done. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$F, {
              show: confirmingLogout.value,
              onClose: closeModal
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out Other Browser Sessions `);
                } else {
                  return [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. <div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$y, {
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    autocomplete: "current-password",
                    onKeyup: logoutOtherBrowserSessions
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$D, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$y, {
                        ref_key: "passwordInput",
                        ref: passwordInput,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password",
                        class: "mt-1 block w-3/4",
                        placeholder: "Password",
                        autocomplete: "current-password",
                        onKeyup: withKeys(logoutOtherBrowserSessions, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$D, {
                        message: unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$A, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$B, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: logoutOtherBrowserSessions
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Log Out Other Browser Sessions `);
                      } else {
                        return [
                          createTextVNode(" Log Out Other Browser Sessions ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$A, { onClick: closeModal }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$B, {
                      class: ["ml-3", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing,
                      onClick: logoutOtherBrowserSessions
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Log Out Other Browser Sessions ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600 dark:text-gray-400" }, " If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. "),
              __props.sessions.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-5 space-y-6"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.sessions, (session, i) => {
                  return openBlock(), createBlock("div", {
                    key: i,
                    class: "flex items-center"
                  }, [
                    createVNode("div", null, [
                      session.agent.is_desktop ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "w-8 h-8 text-gray-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        })
                      ])) : (openBlock(), createBlock("svg", {
                        key: 1,
                        class: "w-8 h-8 text-gray-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "ml-3" }, [
                      createVNode("div", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(session.agent.platform ? session.agent.platform : "Unknown") + " - " + toDisplayString(session.agent.browser ? session.agent.browser : "Unknown"), 1),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500" }, [
                          createTextVNode(toDisplayString(session.ip_address) + ", ", 1),
                          session.is_current_device ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-green-500 font-semibold"
                          }, "This device")) : (openBlock(), createBlock("span", { key: 1 }, "Last active " + toDisplayString(session.last_active), 1))
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "flex items-center mt-5" }, [
                createVNode(_sfc_main$B, { onClick: confirmLogout }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$M, {
                  on: unref(form).recentlySuccessful,
                  class: "ml-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Done. ")
                  ]),
                  _: 1
                }, 8, ["on"])
              ]),
              createVNode(_sfc_main$F, {
                show: confirmingLogout.value,
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(" Log Out Other Browser Sessions ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$y, {
                      ref_key: "passwordInput",
                      ref: passwordInput,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      class: "mt-1 block w-3/4",
                      placeholder: "Password",
                      autocomplete: "current-password",
                      onKeyup: withKeys(logoutOtherBrowserSessions, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$D, {
                      message: unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_sfc_main$A, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$B, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: logoutOtherBrowserSessions
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log Out Other Browser Sessions ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "ConfirmsPassword",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Confirm Password"
    },
    content: {
      type: String,
      default: "For your security, please confirm your password to continue."
    },
    button: {
      type: String,
      default: "Confirm"
    }
  },
  emits: ["confirmed"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const confirmingPassword = ref(false);
    const form = reactive({
      password: "",
      error: "",
      processing: false
    });
    const passwordInput = ref(null);
    const confirmPassword = () => {
      form.processing = true;
      axios.post(route("password.confirm"), {
        password: form.password
      }).then(() => {
        form.processing = false;
        closeModal();
        nextTick().then(() => emit("confirmed"));
      }).catch((error) => {
        form.processing = false;
        form.error = error.response.data.errors.password[0];
        passwordInput.value.focus();
      });
    };
    const closeModal = () => {
      confirmingPassword.value = false;
      form.password = "";
      form.error = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(_attrs)}><span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_sfc_main$F, {
        show: confirmingPassword.value,
        onClose: closeModal
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content)} <div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$y, {
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: form.password,
              "onUpdate:modelValue": ($event) => form.password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              autocomplete: "current-password",
              onKeyup: confirmPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              message: form.error,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content) + " ", 1),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_sfc_main$y, {
                  ref_key: "passwordInput",
                  ref: passwordInput,
                  modelValue: form.password,
                  "onUpdate:modelValue": ($event) => form.password = $event,
                  type: "password",
                  class: "mt-1 block w-3/4",
                  placeholder: "Password",
                  autocomplete: "current-password",
                  onKeyup: withKeys(confirmPassword, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$D, {
                  message: form.error,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$A, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: ["ml-3", { "opacity-25": form.processing }],
              disabled: form.processing,
              onClick: confirmPassword
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.button)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.button), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$A, { onClick: closeModal }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }),
              createVNode(_sfc_main$B, {
                class: ["ml-3", { "opacity-25": form.processing }],
                disabled: form.processing,
                onClick: confirmPassword
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.button), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ConfirmsPassword.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "TwoFactorAuthenticationForm",
  __ssrInlineRender: true,
  props: {
    requiresConfirmation: Boolean
  },
  setup(__props) {
    const props = __props;
    const enabling = ref(false);
    const confirming = ref(false);
    const disabling = ref(false);
    const qrCode = ref(null);
    const setupKey = ref(null);
    const recoveryCodes = ref([]);
    const confirmationForm = useForm({
      code: ""
    });
    const twoFactorEnabled = computed(
      () => {
        var _a;
        return !enabling.value && ((_a = usePage().props.auth.user) == null ? void 0 : _a.two_factor_enabled);
      }
    );
    watch(twoFactorEnabled, () => {
      if (!twoFactorEnabled.value) {
        confirmationForm.reset();
        confirmationForm.clearErrors();
      }
    });
    const enableTwoFactorAuthentication = () => {
      enabling.value = true;
      router.post(route("two-factor.enable"), {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
          showQrCode(),
          showSetupKey(),
          showRecoveryCodes()
        ]),
        onFinish: () => {
          enabling.value = false;
          confirming.value = props.requiresConfirmation;
        }
      });
    };
    const showQrCode = () => {
      return axios.get(route("two-factor.qr-code")).then((response) => {
        qrCode.value = response.data.svg;
      });
    };
    const showSetupKey = () => {
      return axios.get(route("two-factor.secret-key")).then((response) => {
        setupKey.value = response.data.secretKey;
      });
    };
    const showRecoveryCodes = () => {
      return axios.get(route("two-factor.recovery-codes")).then((response) => {
        recoveryCodes.value = response.data;
      });
    };
    const confirmTwoFactorAuthentication = () => {
      confirmationForm.post(route("two-factor.confirm"), {
        errorBag: "confirmTwoFactorAuthentication",
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          confirming.value = false;
          qrCode.value = null;
          setupKey.value = null;
        }
      });
    };
    const regenerateRecoveryCodes = () => {
      axios.post(route("two-factor.recovery-codes")).then(() => showRecoveryCodes());
    };
    const disableTwoFactorAuthentication = () => {
      disabling.value = true;
      router.delete(route("two-factor.disable"), {
        preserveScroll: true,
        onSuccess: () => {
          disabling.value = false;
          confirming.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Two Factor Authentication `);
          } else {
            return [
              createTextVNode(" Two Factor Authentication ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add additional security to your account using two factor authentication. `);
          } else {
            return [
              createTextVNode(" Add additional security to your account using two factor authentication. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (twoFactorEnabled.value && !confirming.value) {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> You have enabled two factor authentication. </h3>`);
            } else if (twoFactorEnabled.value && confirming.value) {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> Finish enabling two factor authentication. </h3>`);
            } else {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> You have not enabled two factor authentication. </h3>`);
            }
            _push2(`<div class="mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p${_scopeId}> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone&#39;s Google Authenticator application. </p></div>`);
            if (twoFactorEnabled.value) {
              _push2(`<div${_scopeId}>`);
              if (qrCode.value) {
                _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
                if (confirming.value) {
                  _push2(`<p class="font-semibold"${_scopeId}> To finish enabling two factor authentication, scan the following QR code using your phone&#39;s authenticator application or enter the setup key and provide the generated OTP code. </p>`);
                } else {
                  _push2(`<p${_scopeId}> Two factor authentication is now enabled. Scan the following QR code using your phone&#39;s authenticator application or enter the setup key. </p>`);
                }
                _push2(`</div><div class="mt-4"${_scopeId}>${qrCode.value}</div>`);
                if (setupKey.value) {
                  _push2(`<div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p class="font-semibold"${_scopeId}> Setup Key: <span${_scopeId}>${setupKey.value}</span></p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (confirming.value) {
                  _push2(`<div class="mt-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$C, {
                    for: "code",
                    value: "Code"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_sfc_main$y, {
                    id: "code",
                    modelValue: unref(confirmationForm).code,
                    "onUpdate:modelValue": ($event) => unref(confirmationForm).code = $event,
                    type: "text",
                    name: "code",
                    class: "block mt-1 w-1/2",
                    inputmode: "numeric",
                    autofocus: "",
                    autocomplete: "one-time-code",
                    onKeyup: confirmTwoFactorAuthentication
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_sfc_main$D, {
                    message: unref(confirmationForm).errors.code,
                    class: "mt-2"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (recoveryCodes.value.length > 0 && !confirming.value) {
                _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p class="font-semibold"${_scopeId}> Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. </p></div><div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 rounded-lg"${_scopeId}><!--[-->`);
                ssrRenderList(recoveryCodes.value, (code) => {
                  _push2(`<div${_scopeId}>${ssrInterpolate(code)}</div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-5"${_scopeId}>`);
            if (!twoFactorEnabled.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, { onConfirmed: enableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$B, {
                      type: "button",
                      class: { "opacity-25": enabling.value },
                      disabled: enabling.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Enable `);
                        } else {
                          return [
                            createTextVNode(" Enable ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$B, {
                        type: "button",
                        class: { "opacity-25": enabling.value },
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, { onConfirmed: confirmTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$B, {
                        type: "button",
                        class: ["mr-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Confirm `);
                          } else {
                            return [
                              createTextVNode(" Confirm ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$B, {
                        key: 0,
                        type: "button",
                        class: ["mr-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, { onConfirmed: regenerateRecoveryCodes }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (recoveryCodes.value.length > 0 && !confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$A, { class: "mr-3" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Regenerate Recovery Codes `);
                          } else {
                            return [
                              createTextVNode(" Regenerate Recovery Codes ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$A, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, { onConfirmed: showRecoveryCodes }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (recoveryCodes.value.length === 0 && !confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$A, { class: "mr-3" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Show Recovery Codes `);
                          } else {
                            return [
                              createTextVNode(" Show Recovery Codes ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      recoveryCodes.value.length === 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$A, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, { onConfirmed: disableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$A, {
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Cancel `);
                          } else {
                            return [
                              createTextVNode(" Cancel ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$A, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, { onConfirmed: disableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$G, {
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Disable `);
                          } else {
                            return [
                              createTextVNode(" Disable ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      !confirming.value ? (openBlock(), createBlock(_sfc_main$G, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              twoFactorEnabled.value && !confirming.value ? (openBlock(), createBlock("h3", {
                key: 0,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " You have enabled two factor authentication. ")) : twoFactorEnabled.value && confirming.value ? (openBlock(), createBlock("h3", {
                key: 1,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " Finish enabling two factor authentication. ")) : (openBlock(), createBlock("h3", {
                key: 2,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " You have not enabled two factor authentication. ")),
              createVNode("div", { class: "mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400" }, [
                createVNode("p", null, " When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")
              ]),
              twoFactorEnabled.value ? (openBlock(), createBlock("div", { key: 3 }, [
                qrCode.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400" }, [
                    confirming.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "font-semibold"
                    }, " To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")) : (openBlock(), createBlock("p", { key: 1 }, " Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))
                  ]),
                  createVNode("div", {
                    class: "mt-4",
                    innerHTML: qrCode.value
                  }, null, 8, ["innerHTML"]),
                  setupKey.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"
                  }, [
                    createVNode("p", { class: "font-semibold" }, [
                      createTextVNode(" Setup Key: "),
                      createVNode("span", { innerHTML: setupKey.value }, null, 8, ["innerHTML"])
                    ])
                  ])) : createCommentVNode("", true),
                  confirming.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mt-4"
                  }, [
                    createVNode(_sfc_main$C, {
                      for: "code",
                      value: "Code"
                    }),
                    createVNode(_sfc_main$y, {
                      id: "code",
                      modelValue: unref(confirmationForm).code,
                      "onUpdate:modelValue": ($event) => unref(confirmationForm).code = $event,
                      type: "text",
                      name: "code",
                      class: "block mt-1 w-1/2",
                      inputmode: "numeric",
                      autofocus: "",
                      autocomplete: "one-time-code",
                      onKeyup: withKeys(confirmTwoFactorAuthentication, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$D, {
                      message: unref(confirmationForm).errors.code,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400" }, [
                    createVNode("p", { class: "font-semibold" }, " Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")
                  ]),
                  createVNode("div", { class: "grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 rounded-lg" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(recoveryCodes.value, (code) => {
                      return openBlock(), createBlock("div", { key: code }, toDisplayString(code), 1);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-5" }, [
                !twoFactorEnabled.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_sfc_main$8, { onConfirmed: enableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$B, {
                        type: "button",
                        class: { "opacity-25": enabling.value },
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$8, { onConfirmed: confirmTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$B, {
                        key: 0,
                        type: "button",
                        class: ["mr-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$8, { onConfirmed: regenerateRecoveryCodes }, {
                    default: withCtx(() => [
                      recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$A, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$8, { onConfirmed: showRecoveryCodes }, {
                    default: withCtx(() => [
                      recoveryCodes.value.length === 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$A, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$8, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$A, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$8, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      !confirming.value ? (openBlock(), createBlock(_sfc_main$G, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    const updatePassword = () => {
      form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
          if (form.errors.password) {
            form.reset("password", "password_confirmation");
            passwordInput.value.focus();
          }
          if (form.errors.current_password) {
            form.reset("current_password");
            currentPasswordInput.value.focus();
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, mergeProps({ onSubmitted: updatePassword }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update Password `);
          } else {
            return [
              createTextVNode(" Update Password ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ensure your account is using a long, random password to stay secure. `);
          } else {
            return [
              createTextVNode(" Ensure your account is using a long, random password to stay secure. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "current_password",
              value: "Current Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "current_password",
              ref_key: "currentPasswordInput",
              ref: currentPasswordInput,
              modelValue: unref(form).current_password,
              "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              message: unref(form).errors.current_password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "New Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              message: unref(form).errors.password_confirmation,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$C, {
                  for: "current_password",
                  value: "Current Password"
                }),
                createVNode(_sfc_main$y, {
                  id: "current_password",
                  ref_key: "currentPasswordInput",
                  ref: currentPasswordInput,
                  modelValue: unref(form).current_password,
                  "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "current-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$D, {
                  message: unref(form).errors.current_password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$C, {
                  for: "password",
                  value: "New Password"
                }),
                createVNode(_sfc_main$y, {
                  id: "password",
                  ref_key: "passwordInput",
                  ref: passwordInput,
                  modelValue: unref(form).password,
                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$D, {
                  message: unref(form).errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$C, {
                  for: "password_confirmation",
                  value: "Confirm Password"
                }),
                createVNode(_sfc_main$y, {
                  id: "password_confirmation",
                  modelValue: unref(form).password_confirmation,
                  "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$D, {
                  message: unref(form).errors.password_confirmation,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$M, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$M, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$B, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      _method: "PUT",
      name: props.user.name,
      email: props.user.email,
      photo: null
    });
    const verificationLinkSent = ref(null);
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const updateProfileInformation = () => {
      if (photoInput.value) {
        form.photo = photoInput.value.files[0];
      }
      form.post(route("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput()
      });
    };
    const sendEmailVerification = () => {
      verificationLinkSent.value = true;
    };
    const selectNewPhoto = () => {
      photoInput.value.click();
    };
    const updatePhotoPreview = () => {
      const photo = photoInput.value.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.value = e.target.result;
      };
      reader.readAsDataURL(photo);
    };
    const deletePhoto = () => {
      router.delete(route("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          photoPreview.value = null;
          clearPhotoFileInput();
        }
      });
    };
    const clearPhotoFileInput = () => {
      var _a;
      if ((_a = photoInput.value) == null ? void 0 : _a.value) {
        photoInput.value.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, mergeProps({ onSubmitted: updateProfileInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile Information `);
          } else {
            return [
              createTextVNode(" Profile Information ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update your account&#39;s profile information and email address. `);
          } else {
            return [
              createTextVNode(" Update your account's profile information and email address. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$C, {
                for: "photo",
                value: "Photo"
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle(!photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><img${ssrRenderAttr("src", __props.user.profile_photo_url)}${ssrRenderAttr("alt", __props.user.name)} class="rounded-full h-20 w-20 object-cover"${_scopeId}></div><div style="${ssrRenderStyle(photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"${_scopeId}></span></div>`);
              _push2(ssrRenderComponent(_sfc_main$A, {
                class: "mt-2 mr-2",
                type: "button",
                onClick: selectNewPhoto
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Select A New Photo `);
                  } else {
                    return [
                      createTextVNode(" Select A New Photo ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (__props.user.profile_photo_path) {
                _push2(ssrRenderComponent(_sfc_main$A, {
                  type: "button",
                  class: "mt-2",
                  onClick: deletePhoto
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Remove Photo `);
                    } else {
                      return [
                        createTextVNode(" Remove Photo ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$D, {
                message: unref(form).errors.photo,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$y, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              message: unref(form).errors.email,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasEmailVerification && __props.user.email_verified_at === null) {
              _push2(`<div${_scopeId}><p class="text-sm mt-2 dark:text-white"${_scopeId}> Your email address is unverified. `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("verification.send"),
                method: "post",
                as: "button",
                class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                onClick: sendEmailVerification
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Click here to re-send the verification email. `);
                  } else {
                    return [
                      createTextVNode(" Click here to re-send the verification email. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><div style="${ssrRenderStyle(verificationLinkSent.value ? null : { display: "none" })}" class="mt-2 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}> A new verification link has been sent to your email address. </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6 sm:col-span-4"
              }, [
                createVNode("input", {
                  ref_key: "photoInput",
                  ref: photoInput,
                  type: "file",
                  class: "hidden",
                  onChange: updatePhotoPreview
                }, null, 544),
                createVNode(_sfc_main$C, {
                  for: "photo",
                  value: "Photo"
                }),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("img", {
                    src: __props.user.profile_photo_url,
                    alt: __props.user.name,
                    class: "rounded-full h-20 w-20 object-cover"
                  }, null, 8, ["src", "alt"])
                ], 512), [
                  [vShow, !photoPreview.value]
                ]),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("span", {
                    class: "block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",
                    style: "background-image: url('" + photoPreview.value + "');"
                  }, null, 4)
                ], 512), [
                  [vShow, photoPreview.value]
                ]),
                createVNode(_sfc_main$A, {
                  class: "mt-2 mr-2",
                  type: "button",
                  onClick: withModifiers(selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Select A New Photo ")
                  ]),
                  _: 1
                }),
                __props.user.profile_photo_path ? (openBlock(), createBlock(_sfc_main$A, {
                  key: 0,
                  type: "button",
                  class: "mt-2",
                  onClick: withModifiers(deletePhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Remove Photo ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_sfc_main$D, {
                  message: unref(form).errors.photo,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$C, {
                  for: "name",
                  value: "Name"
                }),
                createVNode(_sfc_main$y, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  autocomplete: "name"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$D, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$C, {
                  for: "email",
                  value: "Email"
                }),
                createVNode(_sfc_main$y, {
                  id: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  type: "email",
                  class: "mt-1 block w-full",
                  autocomplete: "username"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$D, {
                  message: unref(form).errors.email,
                  class: "mt-2"
                }, null, 8, ["message"]),
                _ctx.$page.props.jetstream.hasEmailVerification && __props.user.email_verified_at === null ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("p", { class: "text-sm mt-2 dark:text-white" }, [
                    createTextVNode(" Your email address is unverified. "),
                    createVNode(unref(Link), {
                      href: _ctx.route("verification.send"),
                      method: "post",
                      as: "button",
                      class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                      onClick: withModifiers(sendEmailVerification, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Click here to re-send the verification email. ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  withDirectives(createVNode("div", { class: "mt-2 font-medium text-sm text-green-600 dark:text-green-400" }, " A new verification link has been sent to your email address. ", 512), [
                    [vShow, verificationLinkSent.value]
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$M, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$M, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$B, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Profile" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Profile </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Profile ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                user: _ctx.$page.props.auth.user
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canUpdatePassword) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                "requires-confirmation": __props.confirmsTwoFactorAuthentication,
                class: "mt-10 sm:mt-0"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$9, {
              sessions: __props.sessions,
              class: "mt-10 sm:mt-0"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasAccountDeletionFeatures) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$a, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  _ctx.$page.props.jetstream.canUpdateProfileInformation ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_sfc_main$5, {
                      user: _ctx.$page.props.auth.user
                    }, null, 8, ["user"]),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canUpdatePassword ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_sfc_main$6, { class: "mt-10 sm:mt-0" }),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canManageTwoFactorAuthentication ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(_sfc_main$7, {
                      "requires-confirmation": __props.confirmsTwoFactorAuthentication,
                      class: "mt-10 sm:mt-0"
                    }, null, 8, ["requires-confirmation"]),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  createVNode(_sfc_main$9, {
                    sessions: __props.sessions,
                    class: "mt-10 sm:mt-0"
                  }, null, 8, ["sessions"]),
                  _ctx.$page.props.jetstream.hasAccountDeletionFeatures ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                    createVNode(SectionBorder),
                    createVNode(_sfc_main$a, { class: "mt-10 sm:mt-0" })
                  ], 64)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const __default__$1 = {
  props: {
    errors: Array
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Reddit",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Reddit Video Downloader" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<meta name="description" content="Download and mirror Reddit videos in the highest quality possible with audio for completely free! Save or archive videos on our platform for free."${_scopeId2}>`);
                } else {
                  return [
                    createVNode("meta", {
                      name: "description",
                      content: "Download and mirror Reddit videos in the highest quality possible with audio for completely free! Save or archive videos on our platform for free."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Reddit Video Downloader with Audio </h2>`);
          } else {
            return [
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  createVNode("meta", {
                    name: "description",
                    content: "Download and mirror Reddit videos in the highest quality possible with audio for completely free! Save or archive videos on our platform for free."
                  })
                ]),
                _: 1
              }),
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Reddit Video Downloader with Audio ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}>`);
            if (__props.errors.length) {
              _push2(`<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert"${_scopeId}><!--[-->`);
              ssrRenderList(__props.errors, (error) => {
                _push2(`<span class="font-medium"${_scopeId}>${ssrInterpolate(error)}</span>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(RedditRedirectForm, null, null, _parent2, _scopeId));
            _push2(`<br${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4"${_scopeId}><div class="text-gray-600 dark:text-gray-400"${_scopeId}><p${_scopeId}>Download your favorite Reddit videos effortlessly and for free. Enter the URL and start downloading in seconds!</p></div><h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200"${_scopeId}>Exclusive Features</h3><ul class="list-disc list-inside text-gray-600 dark:text-gray-400"${_scopeId}><li${_scopeId}>Instant and free downloads of Reddit videos</li><li${_scopeId}>Support for various resolutions and formats</li><li${_scopeId}>User-friendly interface for seamless navigation</li><li${_scopeId}>No registration required - download videos anonymously</li><li${_scopeId}>Built-in video converter for versatile format options</li><li${_scopeId}>High-speed download with no speed limits</li><li${_scopeId}>Compatible with all devices and platforms</li></ul><h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200"${_scopeId}>How It Works</h3><p class="text-gray-600 dark:text-gray-400"${_scopeId}>Paste the Reddit video link on our downloader. Our tool fetches the video in your preferred format and resolution. Just click download and enjoy your video offline, anytime, anywhere!</p></div><br${_scopeId}><div class="bg-orange-500 text-white p-4 rounded"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Download Reddit Videos Even Faster!</h3><p${_scopeId}>Just replace <b${_scopeId}>reddit.com</b> in the URL with <b${_scopeId}>archivevideomirror.com</b> to download or mirror a video!</p></div><br${_scopeId}><div class="bg-green-500 text-white p-4 rounded"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Completely Free</h3><p${_scopeId}>Our Reddit Video Downloader is completely free to use! Reliable, fast, and free - the perfect solution for your video downloading needs! Just enter in a Reddit URL above and press enter, you can immediately download a video or choose to save it on our servers (in case it gets deleted, or maybe to share)!</p></div><br${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  __props.errors.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
                    role: "alert"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.errors, (error) => {
                      return openBlock(), createBlock("span", {
                        class: "font-medium",
                        key: error
                      }, toDisplayString(error), 1);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  createVNode(RedditRedirectForm),
                  createVNode("br"),
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4" }, [
                    createVNode("div", { class: "text-gray-600 dark:text-gray-400" }, [
                      createVNode("p", null, "Download your favorite Reddit videos effortlessly and for free. Enter the URL and start downloading in seconds!")
                    ]),
                    createVNode("h3", { class: "text-lg font-semibold text-gray-800 dark:text-gray-200" }, "Exclusive Features"),
                    createVNode("ul", { class: "list-disc list-inside text-gray-600 dark:text-gray-400" }, [
                      createVNode("li", null, "Instant and free downloads of Reddit videos"),
                      createVNode("li", null, "Support for various resolutions and formats"),
                      createVNode("li", null, "User-friendly interface for seamless navigation"),
                      createVNode("li", null, "No registration required - download videos anonymously"),
                      createVNode("li", null, "Built-in video converter for versatile format options"),
                      createVNode("li", null, "High-speed download with no speed limits"),
                      createVNode("li", null, "Compatible with all devices and platforms")
                    ]),
                    createVNode("h3", { class: "text-lg font-semibold text-gray-800 dark:text-gray-200" }, "How It Works"),
                    createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Paste the Reddit video link on our downloader. Our tool fetches the video in your preferred format and resolution. Just click download and enjoy your video offline, anytime, anywhere!")
                  ]),
                  createVNode("br"),
                  createVNode("div", { class: "bg-orange-500 text-white p-4 rounded" }, [
                    createVNode("h3", { class: "text-lg font-semibold" }, "Download Reddit Videos Even Faster!"),
                    createVNode("p", null, [
                      createTextVNode("Just replace "),
                      createVNode("b", null, "reddit.com"),
                      createTextVNode(" in the URL with "),
                      createVNode("b", null, "archivevideomirror.com"),
                      createTextVNode(" to download or mirror a video!")
                    ])
                  ]),
                  createVNode("br"),
                  createVNode("div", { class: "bg-green-500 text-white p-4 rounded" }, [
                    createVNode("h3", { class: "text-lg font-semibold" }, "Completely Free"),
                    createVNode("p", null, "Our Reddit Video Downloader is completely free to use! Reliable, fast, and free - the perfect solution for your video downloading needs! Just enter in a Reddit URL above and press enter, you can immediately download a video or choose to save it on our servers (in case it gets deleted, or maybe to share)!")
                  ]),
                  createVNode("br")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reddit.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "TermsOfService",
  __ssrInlineRender: true,
  props: {
    terms: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Terms of Service" }, null, _parent));
      _push(`<div class="font-sans text-gray-900 dark:text-gray-100 antialiased"><div class="pt-4 bg-gray-100 dark:bg-gray-900"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
      _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg prose dark:prose-invert">${__props.terms}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const __default__ = {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady", this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    video_url: {
      type: String
    },
    reddit_id: {
      type: String
    },
    nsfw: {
      type: String
    },
    author: {
      type: String
    },
    subreddit: {
      type: String
    },
    views: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const imageExtensions = [".png", ".jpg", ".jpeg", ".gif"];
    const isImage = computed(() => imageExtensions.some((ext) => props.video_url.endsWith(ext)));
    const isVideo = computed(() => props.video_url.endsWith(".mp4"));
    const title = ref(props.title);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Reddit Content Viewer" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<title${_scopeId2}>${ssrInterpolate(title.value)}</title><meta name="description" content="Watch this video and thousands of other videos on our completely free-to-use platform!"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("title", null, toDisplayString(title.value), 1),
                    createVNode("meta", {
                      name: "description",
                      content: "Watch this video and thousands of other videos on our completely free-to-use platform!"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}>${ssrInterpolate(isVideo.value ? "Video Player" : "Image Viewer")}</h2>`);
          } else {
            return [
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  createVNode("title", null, toDisplayString(title.value), 1),
                  createVNode("meta", {
                    name: "description",
                    content: "Watch this video and thousands of other videos on our completely free-to-use platform!"
                  })
                ]),
                _: 1
              }),
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, toDisplayString(isVideo.value ? "Video Player" : "Image Viewer"), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<link crossorigin="anonymous" href="https://vjs.zencdn.net/7.19.2/video-js.css" rel="stylesheet"${_scopeId}><div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4"${_scopeId}><div class="float-left mr-5"${_scopeId}>`);
            if (isVideo.value) {
              _push2(`<video crossorigin="anonymous" class="video-js vjs-default-skin" controls preload="auto" width="640" height="360"${_scopeId}><source${ssrRenderAttr("src", __props.video_url)} type="video/mp4"${_scopeId}></video>`);
            } else {
              _push2(`<!---->`);
            }
            if (isImage.value) {
              _push2(`<img crossorigin="anonymous"${ssrRenderAttr("src", __props.video_url)} alt="content image" width="640" height="360"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><h2 class="text-2xl font-bold text-white"${_scopeId}>${ssrInterpolate(props == null ? void 0 : props.title)}</h2><br${_scopeId}><div class="text-base font-semibold text-white"${_scopeId}><p${_scopeId}><b${_scopeId}>Author:</b> ${ssrInterpolate(props == null ? void 0 : props.author)}</p><p${_scopeId}><b${_scopeId}>Subreddit:</b> ${ssrInterpolate(props == null ? void 0 : props.subreddit)}</p><p${_scopeId}><b${_scopeId}>Views:</b> ${ssrInterpolate(props == null ? void 0 : props.views)}</p><p${_scopeId}><b${_scopeId}>Adult Only:</b> ${ssrInterpolate(props == null ? void 0 : props.nsfw)}</p></div><br${_scopeId}>`);
            _push2(ssrRenderComponent(VideoAudioMixer, {
              title: props.title,
              video_url: props.video_url,
              has_audio: props.has_audio
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("link", {
                crossorigin: "anonymous",
                href: "https://vjs.zencdn.net/7.19.2/video-js.css",
                rel: "stylesheet"
              }),
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4" }, [
                    createVNode("div", { class: "float-left mr-5" }, [
                      isVideo.value ? (openBlock(), createBlock("video", {
                        key: 0,
                        crossorigin: "anonymous",
                        ref: "videoPlayer",
                        class: "video-js vjs-default-skin",
                        controls: "",
                        preload: "auto",
                        width: "640",
                        height: "360"
                      }, [
                        createVNode("source", {
                          src: __props.video_url,
                          type: "video/mp4"
                        }, null, 8, ["src"])
                      ], 512)) : createCommentVNode("", true),
                      isImage.value ? (openBlock(), createBlock("img", {
                        key: 1,
                        crossorigin: "anonymous",
                        src: __props.video_url,
                        alt: "content image",
                        width: "640",
                        height: "360"
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ]),
                    createVNode("h2", { class: "text-2xl font-bold text-white" }, toDisplayString(props == null ? void 0 : props.title), 1),
                    createVNode("br"),
                    createVNode("div", { class: "text-base font-semibold text-white" }, [
                      createVNode("p", null, [
                        createVNode("b", null, "Author:"),
                        createTextVNode(" " + toDisplayString(props == null ? void 0 : props.author), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Subreddit:"),
                        createTextVNode(" " + toDisplayString(props == null ? void 0 : props.subreddit), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Views:"),
                        createTextVNode(" " + toDisplayString(props == null ? void 0 : props.views), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Adult Only:"),
                        createTextVNode(" " + toDisplayString(props == null ? void 0 : props.nsfw), 1)
                      ])
                    ]),
                    createVNode("br"),
                    createVNode(VideoAudioMixer, {
                      title: props.title,
                      video_url: props.video_url,
                      has_audio: props.has_audio
                    }, null, 8, ["title", "video_url", "has_audio"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/VideoPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Videos",
  __ssrInlineRender: true,
  setup(__props) {
    const props = usePage().props;
    const videos = props.videos || [];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Video Library" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<meta name="description" content="Browse our video and image library of mirrored videos and images with audio."${_scopeId2}>`);
                } else {
                  return [
                    createVNode("meta", {
                      name: "description",
                      content: "Browse our video and image library of mirrored videos and images with audio."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Mirrored Video and Image Library </h2>`);
          } else {
            return [
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  createVNode("meta", {
                    name: "description",
                    content: "Browse our video and image library of mirrored videos and images with audio."
                  })
                ]),
                _: 1
              }),
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Mirrored Video and Image Library ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"${_scopeId}><div class="bg-blue-500 text-white p-4 rounded"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Mirrored Videos</h3><p${_scopeId}>This section contains the top 10 most popular videos and images that have been mirrored by our website</p></div><br${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(videos), (video) => {
              _push2(`<div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"${_scopeId}><div class="p-4"${_scopeId}><a${ssrRenderAttr("href", `/library/post/${video.id}/`)}${_scopeId}><h5 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate"${_scopeId}>${ssrInterpolate(video.title)}</h5></a><p class="text-gray-600 dark:text-gray-400 text-sm mb-4"${_scopeId}>${ssrInterpolate(video.description)}</p><div class="text-gray-500 dark:text-gray-300 text-xs flex justify-between"${_scopeId}><span${_scopeId}>By ${ssrInterpolate(video.uploader)}</span><span${_scopeId}>${ssrInterpolate(video.views)} views</span></div></div></div>`);
            });
            _push2(`<!--]--></div></div><main${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</main>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-blue-500 text-white p-4 rounded" }, [
                  createVNode("h3", { class: "text-lg font-semibold" }, "Mirrored Videos"),
                  createVNode("p", null, "This section contains the top 10 most popular videos and images that have been mirrored by our website")
                ]),
                createVNode("br"),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(videos), (video) => {
                    return openBlock(), createBlock("div", {
                      key: video.id,
                      class: "bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                    }, [
                      createVNode("div", { class: "p-4" }, [
                        createVNode("a", {
                          href: `/library/post/${video.id}/`
                        }, [
                          createVNode("h5", { class: "text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate" }, toDisplayString(video.title), 1)
                        ], 8, ["href"]),
                        createVNode("p", { class: "text-gray-600 dark:text-gray-400 text-sm mb-4" }, toDisplayString(video.description), 1),
                        createVNode("div", { class: "text-gray-500 dark:text-gray-300 text-xs flex justify-between" }, [
                          createVNode("span", null, "By " + toDisplayString(video.uploader), 1),
                          createVNode("span", null, toDisplayString(video.views) + " views", 1)
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("main", null, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Videos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/API/Index.vue": __vite_glob_0_0, "./Pages/API/Partials/ApiTokenManager.vue": __vite_glob_0_1, "./Pages/ArchiveVideo.vue": __vite_glob_0_2, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_3, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_4, "./Pages/Auth/Login.vue": __vite_glob_0_5, "./Pages/Auth/Register.vue": __vite_glob_0_6, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_7, "./Pages/Auth/TwoFactorChallenge.vue": __vite_glob_0_8, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_9, "./Pages/Dashboard.vue": __vite_glob_0_10, "./Pages/Home.vue": __vite_glob_0_11, "./Pages/PendingMirror.vue": __vite_glob_0_12, "./Pages/PrivacyPolicy.vue": __vite_glob_0_13, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_14, "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": __vite_glob_0_15, "./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": __vite_glob_0_16, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_17, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_18, "./Pages/Profile/Show.vue": __vite_glob_0_19, "./Pages/Reddit.vue": __vite_glob_0_20, "./Pages/TermsOfService.vue": __vite_glob_0_21, "./Pages/VideoPlayer.vue": __vite_glob_0_22, "./Pages/Videos.vue": __vite_glob_0_23 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
