# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "11_app"
app_title = "POSAPP"
app_publisher = "braderhood"
app_description = "test"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "johnrech@gmail.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/11_app/css/11_app.css"
# app_include_js = "/assets/11_app/js/11_app.js"

# include js, css files in header of web template
# web_include_css = "/assets/11_app/css/11_app.css"
# web_include_js = "/assets/11_app/js/11_app.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "11_app.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "11_app.install.before_install"
# after_install = "11_app.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "11_app.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }
fixtures = [
    {
        "doctype": "Custom Field",
        "filters": [
            [
            'name', 'in',[
               "Item-item_type" ,
               "Item-item_shelf",
               "Item-volume"
            ]]
        ]
    },
     {
        "doctype":"Property Setter",
        "filters":[
            [
                'name','in',[
                  "Item-standard_rate-hidden",
                  "Item-valuation_rate-hidden",
                  "Item-opening_stock-hidden",
                  "Item-valuation_method-hidden",
                  "Item-supplier_details-collapsible"
                  # "Item-default_material_request_type-hidden",
                  # "Item-hub_publishing_sb-hidden",
                  # "Item-website_section-hidden",
                  # "Item-manufacturing-hidden",
                  # "Item-inspection_criteria-hidden",
                  # "Item-customer_details-hidden",
                  # "Item-deferred_expense_section-hidden",
                  # "Item-deferred_revenue_account-hidden",
                  # "Item-deferred_revenue-hidden",
                  # "Item-sales_details-hidden",
                  # "Item-foreign_trade_details-hidden",
                  # "Item-supplier_details-collapsible",
                  # "Item-purchase_details-hidden",
                  # "Item-defaults-hidden",
                  # "Item-variants_section-hidden",
                  # "Item-serial_nos_and_batches-hidden",
                  # "Item-warranty_period-hidden",
                  # "Item-section_break_11-hidden",
                  # "Item-purchase_uom-hidden",
                  # "Item-weight_uom-hidden",
                  # "Item-weight_per_unit-hidden"
                ]]
          ]
      }
];


# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"11_app.tasks.all"
# 	],
# 	"daily": [
# 		"11_app.tasks.daily"
# 	],
# 	"hourly": [
# 		"11_app.tasks.hourly"
# 	],
# 	"weekly": [
# 		"11_app.tasks.weekly"
# 	]
# 	"monthly": [
# 		"11_app.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "11_app.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "11_app.event.get_events"
# }

