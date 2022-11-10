var RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;

var data = [
    {
        "fever": 1,
        "shaking_chills": 2,
        "sweating": 1,
        "loss_of_appetite": 1,
        "stomach_pain": 0,
        "headache": 1,
        cough: 0,
        genital_discharge: 0,
        peeing_pain: 0,
        genital_lumps: 0,
        anal_lumps: 0,
        rash: 0,
        disease: "malaria"
    },
    {
        "fever": 1,
        "shaking_chills": 0,
        "sweating": 1,
        "loss_of_appetite": 2,
        "stomach_pain": 1,
        "headache": 1,
        cough: 0,
        genital_discharge: 0,
        peeing_pain: 0,
        genital_lumps: 0,
        anal_lumps: 0,
        rash: 0,
        disease: "typhoid"
    },
    {
        "fever": 0,
        "shaking_chills": 0,
        "sweating": 0,
        "loss_of_appetite": 0,
        "stomach_pain": 0,
        "headache": 1,
        cough: 0,
        genital_discharge: 0,
        peeing_pain: 0,
        genital_lumps: 0,
        anal_lumps: 0,
        rash: 0,
        disease: "sti"
    },
]

// var testdata = [{
//     "length":6.3,
//     "width":2.5,
//     "petal_length":5,
//     "petal_width":1.9,
//     //"species":"virginica"
//   },
//   {
//     "length":4.7,
//     "width":3.2,
//     "petal_length":1.3,
//     "petal_width":0.2,
//     //"species":"setosa"
//   }...
// ];

export const trainClassifier = function(data, n_estimators=3, target="disease") {
    var rf = new RandomForestClassifier({
        n_estimators: n_estimators
    })

    rf.fit(data, null, target, null)

    return rf;
}

// var rf = new RandomForestClassifier({
//     n_estimators: 3
// });

// rf.fit(data, null, "disease", function(err, trees){
//   //console.log(JSON.stringify(trees, null, 4));
//   var pred = rf.predict(testdata, trees);

//   console.log(pred);

//   // pred = ["virginica", "setosa"]
// });