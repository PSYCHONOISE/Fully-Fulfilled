var collapsibles;
const arrayRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tabs');
  var instance = M.Tabs.init(elems);
  var elems = document.querySelectorAll('.collapsible');
  collapsibles = M.Collapsible.init(elems);
  //console.log(collapsibles)
  //collapsibles[1].open()
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

additionalCosts = {
  '01': 125,
  '02': 125,
  '03': 250,
  '04': 500,
  '05': 500,
  '06': 200,
  '07': 6,
  '08': 12,
  '09': 24,
  '10': 12,
  '11': 1,
  '12': 3,
  '13': 6,
  '14': 12,
  '15': 1,
  '16': 3,
  '17': 6,
  '18': 9,
  '19': 12,
  '20': 6,
  '21': 8,
  '22': 18,
  '23': 24,
  '24': 30,
  '25': 42,
  '26': 2,
  '27': 95,
  '28': 130,
  '29': 300,
  '30': 500,
  '31': 750,
  '32': 1500,
  '33': 250,
  '34': 12,
  '35': 15,
  '36': 2500,
  '37': 1600,
  '38': 1300,
  '39': 100,
  '40': 50,
  '41': 300,
  '42': 300
}

Array.from(document.getElementsByClassName('splrdChkbx1')).forEach((e) => {
  let radio = e.children[0];
  e.addEventListener('click', function() {
    collapsibles[0].open(1)
    let inputs = document.querySelectorAll('.service2')
    for (var i = inputs.length - 1; i >= 0; i--) {
      if (radio.checked) { inputs[i].checked = false; }
      else               { inputs[i].checked = true; }
    }
    inputs = document.querySelectorAll('.service1')
    for (var i = inputs.length - 1; i >= 0; i--) {
      if (radio.checked) { inputs[i].checked = true; }
      else               { inputs[i].checked = false; }
    }
  });
});

Array.from(document.getElementsByClassName('splrdChkbx2')).forEach((e) => {
  let radio = e.children[0];
  e.addEventListener('click', function() {
    collapsibles[0].open(0)
    let inputs = document.querySelectorAll('.service1')
    for (var i = inputs.length - 1; i >= 0; i--) {
      if (radio.checked) { inputs[i].checked = false; }
      else               { inputs[i].checked = true; }
    }
    inputs = document.querySelectorAll('.service2')
    for (var i = inputs.length - 1; i >= 0; i--) {
      if (radio.checked) { inputs[i].checked = true; }
      else               { inputs[i].checked = false; }
    }
  });
});

Array.from(document.getElementsByClassName('splrdChkbx3')).forEach((e) => {
  let input1 = e.children[0];
  let code = input1.getAttribute('name').split('additional')[1]
  e.addEventListener('click', function() {
    numCode = Number(code)
    if (numCode!=document.getElementsByClassName('splrdChkbx3').length) {
      collapsibles[1].open(numCode)
    } else {
      collapsibles[1].open(0)
    }
    console.log(numCode-1)
    let input2 = document.querySelectorAll('[name="fbs'+code+'"]')[0]
    if (input1.checked) { input2.removeAttribute('disabled'); }
    else                { input2.setAttribute('disabled', 'disabled'); input2.checked = false; }
  });
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