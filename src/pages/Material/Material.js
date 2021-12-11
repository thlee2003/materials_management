import React, { useEffect, useState } from 'react';
import styles from './Material.module.css';
import Handsontable from 'handsontable';
import axios from 'axios';

import { HyperFormula } from 'hyperformula';

// 테이블 생성 함수
let hot;
let hotData;
const table = (userName) => {
    const column = ['코드', '분류', '품목명', '제조사', ' 수량', '단가(부가세 별도)', '총금액', '날짜', '작성자'];
    const hyperformulaInstance = HyperFormula.buildEmpty();
    const container = document.getElementById('table');

    // 날짜 생성
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();

    hotData = [['', '', '', '', 0, 0, '=PRODUCT(E1:F1)', `${year}-${month}-${day}`, userName]];

    // 테이블 옵션
    hot = new Handsontable(container, {
        className: 'htCenter',
        data: hotData,
        colHeaders: column,
        rowHeaders: true,
        width: '100%',
        height: '100%',
        licenseKey: 'non-commercial-and-evaluation',
        stretchH: 'all',
        columns: [
            {},
            {},
            {},
            {},
            { type: 'numeric', numericFormat: { pattern: '0,0' } },
            { type: 'numeric', numericFormat: { pattern: '0,0' } },
            {
                type: 'numeric',
                readOnly: true,
                numericFormat: { pattern: '0,0' },
            },
            { readOnly: true },
            { readOnly: true },
        ],
        fixedRowsBottom: 1,
        formulas: {
            engine: hyperformulaInstance,
            sheetName: 'Sheet1',
        },
    });

    let num = hot.countRows();
    // 합계
    hot.alter('insert_row', hot.countRows());
    hot.setDataAtCell(hot.countRows() - 1, 6, '=SUM(G1:G' + (hot.countRows() - 1) + ')');

    // 셀 추가
    let add = document.querySelector('.add');
    add.addEventListener('click', function () {
        let data = [
            '',
            '',
            '',
            '',
            0,
            0,
            '=PRODUCT(E' + hot.countRows() + ':F' + hot.countRows() + ')',
            `${year}-${month}-${day}`,
            userName,
        ];
        hot.alter('insert_row', hot.countRows() - 1, 1);
        for (let i = 0; i < 9; i++) {
            hot.setDataAtCell(hot.countRows() - 2, i, data[i]);
        }
        num += 1;
    });

    // 셀 삭제
    let del = document.querySelector('.del');
    del.addEventListener('click', function () {
        if (hot.countRows() !== 2) {
            hot.alter('remove_row', num - 1, 1);
            num -= 1;
        }
    });

    // 업데이트시 값 적용
    hot.updateSettings({
        afterCreateRow: function (i) {
            hot.setDataAtCell(hot.countRows() - 1, 6, '=SUM(G1:G' + (hot.countRows() - 1) + ')');
        },
    });
};

const Material = ({ userName }) => {
    console.log(hotData);
    // 테이블 삽입
    useEffect(() => {
        table(userName);
    }, []);

    let arr = [];
    let bool;
    const enrollment = () => {
        for (let i = 0; i < hotData.length - 1; i++) {
            arr.push(hotData[i][0]);
            if (
                hotData[i][0] === '' ||
                hotData[i][1] === '' ||
                hotData[i][2] === '' ||
                hotData[i][3] === '' ||
                hotData[i][4] === 0 ||
                hotData[i][5] === 0
            ) {
                console.log('실채');
                bool = false;
            } else {
                bool = true;
            }
        }
        if (bool) {
            console.log(arr);
            axios
                .post('http://localhost:5000/material/check', {
                    code: arr,
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data === true) {
                        hotData.pop();
                        axios
                            .post('http://localhost:5000/material/info', {
                                array: hotData,
                                abc: hotData.length,
                            })
                            .then((response) => {
                                if (response.data) {
                                    alert('등록 완료');
                                    window.location.reload();
                                }
                            });
                    } else {
                        alert('등록 실패');
                        window.location.reload();
                    }
                });
        }
        // console.log(bool3);
        // console.log(arr);
        // axios
        //     .post('http://localhost:5000/material/check', {
        //         code: arr,
        //     })
        //     .then((response) => {
        //         console.log(response.datas);
        //     });
        // .then((response) => {
        //   if (response.data.data1 === false) {
        //     bool(hotData[i][0], false);
        //   } else {
        //     bool(hotData[i]);
        //   }
        // });
    };
    // let arr = [];
    // async function bool(value, bool) {
    //   console.log(value);
    //   if (bool === false) {
    //     alert(`${value}는 이미 있는 값입니다`);
    //   } else {
    //     axios
    //       .post('http://localhost:5000/material/info', {
    //         // abc: hotData.length,
    //         array: value,
    //       })
    //       .then((response) => {
    //         // if (response.data) {
    //         //   alert('등록 완료');
    //         // }
    //       });
    //   }
    // }
    return (
        <div className={styles.header}>
            <div className={styles.div}>
                <div className={styles.top}>
                    <h1 className={styles.h1}>자재 등록</h1>
                    <div className={styles.button}>
                        <button className="add">행 추가</button>
                        <button className="del">행 삭제</button>
                        <button onClick={enrollment}>등록</button>
                    </div>
                </div>
                <div className={styles.table}>
                    <div id="table"></div>
                </div>
            </div>
        </div>
    );
};

export default Material;
