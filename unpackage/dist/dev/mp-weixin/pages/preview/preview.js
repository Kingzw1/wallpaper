"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_uni_rate = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _component_uni_rate + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const clickInfo = () => {
      infoPopup.value.open("bottom");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$3,
        d: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        e: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        f: common_vendor.p({
          type: "info",
          size: "23"
        }),
        g: common_vendor.o(clickInfo),
        h: common_vendor.p({
          type: "star",
          size: "23"
        }),
        i: common_vendor.p({
          type: "download",
          size: "23"
        }),
        j: maskState.value,
        k: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        l: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3",
          size: "16"
        }),
        m: common_vendor.sr(infoPopup, "2dad6c07-5", {
          "k": "infoPopup"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
