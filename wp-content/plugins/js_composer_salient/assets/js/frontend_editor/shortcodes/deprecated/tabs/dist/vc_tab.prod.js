"use strict";window.InlineShortcodeView_vc_tab=window.InlineShortcodeViewContainerWithParent.extend({controls_selector:"#vc_controls-template-vc_tab",render:function(){var e,t,i=this.model.get("params");return window.InlineShortcodeView_vc_tab.__super__.render.call(this),this.$tab=this.$el.find("> :first"),_.isEmpty(i.tab_id)?(i.tab_id=vc_guid()+"-"+Math.floor(11*Math.random()),this.model.save("params",i),e="tab-"+i.tab_id,this.$tab.attr("id",e)):e=this.$tab.attr("id"),this.$el.attr("id",e),this.$tab.attr("id",e+"-real"),this.$tab.find(".vc_element[data-tag]").length||this.$tab.empty(),this.$el.addClass("ui-tabs-panel wpb_ui-tabs-hide"),this.$tab.removeClass("ui-tabs-panel wpb_ui-tabs-hide"),this.parent_view&&this.parent_view.addTab&&(this.parent_view.addTab(this.model)||this.$el.removeClass("wpb_ui-tabs-hide")),t=this.doSetAsActive(),this.parent_view.buildTabs(t),this},allowAddControl:function(){return vc_user_access().shortcodeAll("vc_tab")},doSetAsActive:function(){var e=this.model.get("active_before_cloned");return(!this.model.get("from_content")&&!this.model.get("default_content")&&_.isUndefined(e)||!_.isUndefined(e)&&(this.model.unset("active_before_cloned"),!0===e))&&this.model},removeView:function(e){window.InlineShortcodeView_vc_tab.__super__.removeView.call(this,e),this.parent_view&&this.parent_view.removeTab&&this.parent_view.removeTab(e)},clone:function(e){var t,i;e&&e.preventDefault&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation(),vc.clone_index/=10,t=this.model.clone(),t.get("params"),i=new vc.ShortcodesBuilder;var n=vc.CloneModel(i,this.model,this.model.get("parent_id")),a=(this.parent_view.active_model_id,this);i.render(function(){a.parent_view.cloneTabAfter&&a.parent_view.cloneTabAfter(n)})},rowsColumnsConverted:function(){_.each(vc.shortcodes.where({parent_id:this.model.get("id")}),function(e){e.view.rowsColumnsConverted&&e.view.rowsColumnsConverted()})}});