const express = require('express');
const router = express.Router();

let iller = require("./iller.json");
let ilceler = require("./ilceler.json");

iller.forEach(item => {
    item.ilceler = (ilceler.filter(ilce => ilce.il === item.il))
        .map(i => i.ilce);
});

const toLowerCase = ch => ch.toLocaleLowerCase("tr");

router.get('/', (req, res) => {
    const { query } = req;

    if (Object.values(query).length === 0) {
        return res.json(iller);
    }

    let answer;
    if (query.bolge) {
        let bolge = query.bolge.split(',').map(toLowerCase);

        answer = iller
            .filter(il => bolge.includes(toLowerCase(il.bolge)))
            .sort((a, b) => b.bolge.localeCompare(a.bolge));
    }

    if (query.il) {
        let il = query.il.split(',').map(toLowerCase);
        if (!answer) {
            answer = iller;
        }
        answer = answer.filter(item => il.includes(toLowerCase(item.il)));
        if (!query.bolge) {
            answer.sort((a, b) => b.il.localeCompare(a.il));
        }
    }

    if (query.plaka) {
        let plaka = query.plaka.split(',').map(ch => parseInt(ch));
        if (!answer) {
            answer = iller;
        }
        answer = answer.filter(item => plaka.includes(parseInt(item.plaka)));
        if (!query.bolge && !query.il) {
            answer.sort((a, b) => a.plaka > b.plaka);
        }
    }

    res.json(answer);
});

module.exports = router;
