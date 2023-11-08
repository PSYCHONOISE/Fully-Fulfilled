document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
  var rsltmsg = M.Modal.init(document.getElementById('RSLTMSG'));
});

function costCompute() {
  console.log(M.Modal)
  let e = {};
  let cost = {
    'packaging_type': [0, 15, 10, 15, 10, 15],
    'complectation': [0, 5],
    'marking': [0, 5],
    'marking_on_the_top_package': [0, 5],
    'tagling': [0, 5],
    'visual_check_for_defects': [0, 10],
    'checking_for_defective_electrical_appliances': [0, 15],
    'formation_of_delivery_box': [0, 100],
  };
  e['packaging_type']                               = document.forms['main']['packaging_type'].value; // document.querySelector("[name=packaging_type]");
  e['complectation']                                = document.forms['main']['complectation'].value; // document.querySelector("[name=complectation]");
  e['marking']                                      = document.forms['main']['marking'].value; // document.querySelector("[name=marking]");
  e['marking_on_the_top_package']                   = document.forms['main']['marking_on_the_top_package'].value; // document.querySelector("[name=marking_on_the_top_package]");
  e['tagling']                                      = document.forms['main']['tagling'].value; // document.querySelector("[name=tagling]");
  e['visual_check_for_defects']                     = document.forms['main']['visual_check_for_defects'].value; // document.querySelector("[name=visual_check_for_defects]");
  e['checking_for_defective_electrical_appliances'] = document.forms['main']['checking_for_defective_electrical_appliances'].value; // document.querySelector("[name=checking_for_defective_electrical_appliances]");
  e['formation_of_delivery_box']                    = document.forms['main']['formation_of_delivery_box'].value; // document.querySelector("[name=formation_of_delivery_box]");
  e['number_of_delivery_boxes']                     = document.forms['main']['number_of_delivery_boxes'].value; // document.querySelector("[name=number_of_delivery_boxes]");
  e['goods_quantity']                               = document.forms['main']['goods_quantity'].value; // document.querySelector("[name=goods_quantity]");
  e['storage_over_2_weeks']                         = document.forms['main']['storage_over_2_weeks'].value; // document.querySelector("[name=storage_over_2_weeks]");
  let packagingTypeCost                            = cost['packaging_type']                              [Number(e['packaging_type'].value)];
  let complectationCost                            = cost['complectation']                               [e['complectation'].checked ? 1 : 0];
  let markingCost                                  = cost['marking']                                     [e['marking'].checked ? 1 : 0];
  let markingOnTheTopPackageCost                   = cost['marking_on_the_top_package']                  [e['marking_on_the_top_package'].checked ? 1 : 0];
  let taglingCost                                  = cost['tagling']                                     [e['tagling'].checked ? 1 : 0];
  let visualCheckForDefectsCost                    = cost['visual_check_for_defects']                    [e['visual_check_for_defects'].checked ? 1 : 0];
  let checkingForDefectiveElectricalAppliancesCost = cost['checking_for_defective_electrical_appliances'][e['checking_for_defective_electrical_appliances'].checked ? 1 : 0];
  let formationOfDeliveryBoxCost                   = cost['formation_of_delivery_box']                   [e['formation_of_delivery_box'].checked ? 1 : 0];
  let numberOfDeliveryBoxes                        = Number(e['number_of_delivery_boxes']);
  if (e['number_of_delivery_boxes'] == "") {
    document.getElementById('RESULT').innerText = ''
    document.getElementById('ALERT').innerText = 'Количество коробов поставки должно быть числом';
  } else if (e['goods_quantity'] == "") {
    document.getElementById('RESULT').innerText = ''
    document.getElementById('ALERT').innerText = 'Количество товара должно быть числом';
  } else {
    document.getElementById('ALERT').innerText = ''
    document.getElementById('RESULT').innerText = (packagingTypeCost + complectationCost + markingCost + markingOnTheTopPackageCost + taglingCost + visualCheckForDefectsCost + checkingForDefectiveElectricalAppliancesCost + formationOfDeliveryBoxCost * numberOfDeliveryBoxes) + ' руб.'
  }
}