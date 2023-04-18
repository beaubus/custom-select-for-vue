import { nextTick as m, openBlock as s, createElementBlock as i, Fragment as r, createElementVNode as u, toDisplayString as c, renderList as p, createCommentVNode as _ } from "vue";
const g = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [d, l] of t)
    o[d] = l;
  return o;
}, f = {
  props: [
    "modelValue",
    "label",
    "options"
  ],
  emits: ["update:modelValue"],
  data() {
    return {
      toggled: !1
    };
  },
  watch: {
    toggled(e) {
      e && m().then(() => {
        this.$refs.selectoptions.focus();
      });
    }
  },
  methods: {
    selectOption(e) {
      this.$emit("update:modelValue", e), this.toggled = !1;
    }
  },
  mounted() {
    this.$emit("update:modelValue", this.options[0]);
  }
}, v = ["onClick"];
function k(e, t, o, d, l, a) {
  return s(), i(r, null, [
    u("div", {
      class: "cs-input",
      onClick: t[0] || (t[0] = (n) => l.toggled = !l.toggled)
    }, [
      u("label", null, c(o.label) + ": " + c(o.modelValue), 1)
    ]),
    l.toggled ? (s(), i("div", {
      key: 0,
      class: "cs-options",
      tabindex: "0",
      ref: "selectoptions",
      onFocusout: t[1] || (t[1] = (n) => l.toggled = !1)
    }, [
      (s(!0), i(r, null, p(o.options, (n) => (s(), i("div", {
        onClick: (V) => a.selectOption(n)
      }, c(n), 9, v))), 256))
    ], 544)) : _("", !0)
  ], 64);
}
const x = /* @__PURE__ */ g(f, [["render", k], ["__scopeId", "data-v-7f987ed2"]]);
export {
  x as CustomSelect
};
