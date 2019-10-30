import frappe

@frappe.whitelist()
def getitems(item_code):
     return frappe.db.sql("""SELECT item_type,volume,item_name, item_group FROM `tabItem` WHERE item_code= %s""", item_code, as_dict=1);

@frappe.whitelist()
def  rate(item_code): 
     return frappe.db.sql("""SELECT price_list_rate FROM `tabItem Price` WHERE price_list='Standard Buying' && item_code= %s""", item_code, as_dict=1);