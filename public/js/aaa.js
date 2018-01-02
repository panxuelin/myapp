define(function (require, exports, module) {
    var $ = require('jquery');
    var shan = require('lib/shan_base');
    require('lib/vue/vue.min');
    require('lib/fastclick');
    require('lib/jquery.tmpl');
    var cityinstit = require('lib/cityinstit');

    var _goodsCode = shan.tools.getUrlParam('goodsCode');
    var _num = shan.tools.getUrlParam('tjnum') == '' ? 1 : shan.tools.getUrlParam('tjnum');
    var _goodsdata = [];
    var _addPkgdata = [];
    const GOODSDATALIB = {
        'GDS110010003': [
            {
                'goodsCode': 'GDS720760182',
                'addedPrice': 79,
                'goodsName': '关爱父母标准升级B套餐'
            },
            {
                'goodsCode': 'GDS270352702',
                'addedPrice': 109,
                'goodsName': '关爱父母标准升级C套餐'
            },
            {
                'goodsCode': 'GDS653303255',
                'addedPrice': 199,
                'goodsName': '关爱父母标准升级A套餐'
            },
            {
                'goodsCode': 'GDS816267197',
                'addedPrice': 188,
                'goodsName': '关爱父母标准升级F套餐'
            },
            {
                'goodsCode': 'GDS211221861',
                'addedPrice': 278,
                'goodsName': '关爱父母标准升级D套餐'
            },
            {
                'goodsCode': 'GDS210875640',
                'addedPrice': 308,
                'goodsName': '关爱父母标准升级E套餐'
            },
            {
                'goodsCode': 'GDS374700430',
                'addedPrice': 387,
                'goodsName': '关爱父母标准升级G套餐'
            }
        ],
        'GDS110010004': [
            [
                {
                    'goodsCode': 'GDS807168351',
                    'addedPrice': 199,
                    'goodsName': '关爱父母高级升级A套餐'
                },
                {
                    'goodsCode': 'GDS172859584',
                    'addedPrice': 79,
                    'goodsName': '关爱父母高级升级B套餐'
                },
                {
                    'goodsCode': 'GDS357711094',
                    'addedPrice': 109,
                    'goodsName': '关爱父母高级升级C套餐'
                },
                {
                    'goodsCode': 'GDS887251836',
                    'addedPrice': 278,
                    'goodsName': '关爱父母高级升级E套餐'
                },
                {
                    'goodsCode': 'GDS778124688',
                    'addedPrice': 309,
                    'goodsName': '关爱父母高级升级F套餐'
                },
                {
                    'goodsCode': 'GDS612037083',
                    'addedPrice': 188,
                    'goodsName': '关爱父母高级升级G套餐'
                },
                {
                    'goodsCode': 'GDS467482874',
                    'addedPrice': 387,
                    'goodsName': '关爱父母高级升级D套餐'
                }
            ],
            [
                {
                    'goodsCode': 'GDS807168351',
                    'addedPrice': 199,
                    'goodsName': '关爱父母高级升级A套餐'
                },
                {
                    'goodsCode': 'GDS172859584',
                    'addedPrice': 79,
                    'goodsName': '关爱父母高级升级B套餐'
                },
                {
                    'goodsCode': 'GDS403282209',
                    'addedPrice': 159,
                    'goodsName': '关爱父母高级升级H套餐'
                },
                {
                    'goodsCode': 'GDS887251836',
                    'addedPrice': 278,
                    'goodsName': '关爱父母高级升级E套餐'
                },
                {
                    'goodsCode': 'GDS575315529',
                    'addedPrice': 358,
                    'goodsName': '关爱父母高级升级I套餐'
                },
                {
                    'goodsCode': 'GDS309054348',
                    'addedPrice': 238,
                    'goodsName': '关爱父母高级升级J套餐'
                },
                {
                    'goodsCode': 'GDS536893824',
                    'addedPrice': 437,
                    'goodsName': '关爱父母高级升级K套餐'
                }
            ]
        ],
        'GDS110010001': [
            {
                'goodsCode': 'GDS110010002',
                'addedPrice': 99,
                'goodsName': '关爱父母孝心升级套餐'
            },
            {
                'goodsCode': 'GDS111010002',
                'addedPrice': 198,
                'goodsName': '关爱父母加强升级(女)套餐'
            },
            {
                'goodsCode': 'GDS111010003',
                'addedPrice': 198,
                'goodsName': '关爱父母加强升级(男)套餐'
            }
        ],
        'GDS905135589': [
            {
                'goodsCode': 'GDS720760182',
                'addedPrice': 79,
                'goodsName': '关爱父母标准升级B套餐'
            },
            {
                'goodsCode': 'GDS270352702',
                'addedPrice': 109,
                'goodsName': '关爱父母标准升级C套餐'
            },
            {
                'goodsCode': 'GDS653303255',
                'addedPrice': 199,
                'goodsName': '关爱父母标准升级A套餐'
            },
            {
                'goodsCode': 'GDS816267197',
                'addedPrice': 188,
                'goodsName': '关爱父母标准升级F套餐'
            },
            {
                'goodsCode': 'GDS211221861',
                'addedPrice': 278,
                'goodsName': '关爱父母标准升级D套餐'
            },
            {
                'goodsCode': 'GDS210875640',
                'addedPrice': 308,
                'goodsName': '关爱父母标准升级E套餐'
            },
            {
                'goodsCode': 'GDS374700430',
                'addedPrice': 387,
                'goodsName': '关爱父母标准升级G套餐'
            }
        ],
        'GDS349557890': [
            [
                {
                    'goodsCode': 'GDS807168351',
                    'addedPrice': 199,
                    'goodsName': '关爱父母高级升级A套餐'
                },
                {
                    'goodsCode': 'GDS172859584',
                    'addedPrice': 79,
                    'goodsName': '关爱父母高级升级B套餐'
                },
                {
                    'goodsCode': 'GDS357711094',
                    'addedPrice': 109,
                    'goodsName': '关爱父母高级升级C套餐'
                },
                {
                    'goodsCode': 'GDS887251836',
                    'addedPrice': 278,
                    'goodsName': '关爱父母高级升级E套餐'
                },
                {
                    'goodsCode': 'GDS778124688',
                    'addedPrice': 309,
                    'goodsName': '关爱父母高级升级F套餐'
                },
                {
                    'goodsCode': 'GDS612037083',
                    'addedPrice': 188,
                    'goodsName': '关爱父母高级升级G套餐'
                },
                {
                    'goodsCode': 'GDS467482874',
                    'addedPrice': 387,
                    'goodsName': '关爱父母高级升级D套餐'
                }
            ],
            [
                {
                    'goodsCode': 'GDS807168351',
                    'addedPrice': 199,
                    'goodsName': '关爱父母高级升级A套餐'
                },
                {
                    'goodsCode': 'GDS172859584',
                    'addedPrice': 79,
                    'goodsName': '关爱父母高级升级B套餐'
                },
                {
                    'goodsCode': 'GDS403282209',
                    'addedPrice': 159,
                    'goodsName': '关爱父母高级升级H套餐'
                },
                {
                    'goodsCode': 'GDS887251836',
                    'addedPrice': 278,
                    'goodsName': '关爱父母高级升级E套餐'
                },
                {
                    'goodsCode': 'GDS575315529',
                    'addedPrice': 358,
                    'goodsName': '关爱父母高级升级I套餐'
                },
                {
                    'goodsCode': 'GDS309054348',
                    'addedPrice': 238,
                    'goodsName': '关爱父母高级升级J套餐'
                },
                {
                    'goodsCode': 'GDS536893824',
                    'addedPrice': 437,
                    'goodsName': '关爱父母高级升级K套餐'
                }
            ]
        ]
    };
    const addPkgDetailLib = {
        'GDS110010003': [
            {
                name: '增加骨密度检查',
                price: 79,
                imgUrl: '/static/images/order/icon_bone.png',
                detail: [
                    {
                        'name': '骨密度检查',
                        'desc': '可用于预测骨营养状态，反映骨质疏松程度，进行骨折风险评估，是骨骼强度的一个重要指标，尤其适用于50岁以上的中老年群体'
                    }]
            },
            {
                name: '增加心脏彩超检查',
                price: 109,
                imgUrl: '/static/images/order/icon_heart.png',
                detail: [
                    {
                        'name': '心脏彩超',
                        'desc': '用于检查冠心病 、风心病、所累及的心脏各瓣膜病变，以及各种心肌病、高血压性心脏病、室壁瘤、心脏粘液瘤等'
                    }
                ]
            },
            {
                name: '升级至肿瘤12项筛查',
                price: 199,
                imgUrl: '/static/images/order/icon_upgrade.png',
                detail: [
                    {
                        'name': '肿瘤CEA',
                        'desc': '用于原发性肝癌、病毒性肝炎、肝硬化、睾丸癌、畸胎瘤等疾病的筛查'
                    },
                    {
                        'name': '肿瘤AFP',
                        'desc': '用于结肠癌、直肠癌、胰腺癌的辅助诊断和疗效判断；胃癌、乳腺癌、肺癌等也可导致其升高'
                    },
                    {
                        'name': 'TPSA',
                        'desc': '用于前列腺癌、前列腺增生、肿大的辅助筛查'
                    },
                    {
                        'name': 'FPSA',
                        'desc': 'FPSA/TPSA比值，对前列腺癌和前列腺良性增生的辅助鉴别具有重要意义'
                    },
                    {
                        'name': 'CA153',
                        'desc': '用于乳腺癌、转移性乳腺癌、肝癌、卵巢癌、胰腺癌、肺癌等恶性肿瘤的辅助筛查及疾病进展监测'
                    },
                    {
                        'name': 'CA125',
                        'desc': '胰腺癌、胆道恶性肿瘤的诊断及胃肠道、甲状腺肿瘤的诊断和疗效监测'
                    },
                    {
                        'name': 'CA199',
                        'desc': '可用于卵巢癌的辅助筛查'
                    },
                    {
                        'name': 'CA242',
                        'desc': '用于筛查胰腺癌、结肠癌等'
                    },
                    {
                        'name': 'CA50',
                        'desc': '用于肺癌、肝癌、胃癌、卵巢或子宫颈癌、胰或胆管癌的辅助筛查；直肠癌、膀胱癌也可导致其升高'
                    },
                    {
                        'name': 'CK-19',
                        'desc': '可用于筛查非小细胞肺癌等疾病'
                    },
                    {
                        'name': 'NSE',
                        'desc': '用于小细胞肺癌、神经母细胞瘤、神经内分泌细胞肿瘤(如嗜铬细胞瘤、胰岛细胞瘤、黑色素瘤)等辅助筛查'
                    },
                    {
                        'name': 'β-HCG',
                        'desc': '对于卵巢癌、绒癌等妇科肿瘤具有一定的提示作用'
                    }
                ]
            }
        ],
        'GDS110010004': [
            [
                {
                    name: '全面肿瘤筛查加项包',
                    price: 199,
                    imgUrl: '/static/images/order/icon_upgrade.png',
                    detail: [
                        {
                            'name': '癌抗原19-9',
                            'desc': '可用于胰腺癌、胆道恶性肿瘤、结肠癌等恶性肿瘤的辅助筛查'
                        }, {
                            'name': '糖类抗原15-3',
                            'desc': '用于乳腺癌、转移性乳腺癌、肝癌等恶性肿瘤的辅助筛查及疾病进展监测'
                        }, {
                            'name': '游离前列腺特异性抗原',
                            'desc': '用于前列腺癌、前列腺增生、肿大的辅助筛查'
                        }, {
                            'name': '细胞角蛋白',
                            'desc': '可用于筛查非小细胞肺癌等疾病'
                        }, {
                            'name': '神经元特异性烯醇化酶',
                            'desc': '用于小细胞肺癌、神经母细胞瘤等疾病的辅助筛查'
                        }, {
                            'name': '癌抗原50',
                            'desc': '广谱肿瘤标志物，用于肺癌、肝癌、胃癌、结直肠癌的辅助诊断和监测肿瘤进展'
                        }, {
                            'name': '癌抗原724',
                            'desc': '用于胃癌、各种消化道癌症的筛查'
                        }, {
                            'name': '人绒毛膜促性腺激素',
                            'desc': '对于卵巢癌、绒癌等肿瘤具有一定的提示作用'
                        }]
                },
                {
                    name: '骨密度检测加项包',
                    price: 79,
                    imgUrl: '/static/images/order/icon_bone.png',
                    detail: [
                        {
                            'name': '骨密度检测',
                            'desc': '观察骨密度变化，推测骨质疏松的程度，预测骨折的危险性'
                        }
                    ]
                },
                {
                    name: '宫颈癌筛查加项包（女）',
                    price: 109,
                    imgUrl: '/static/images/order/icon_woman.png',
                    detail: [
                        {
                            'name': '宫颈TCT',
                            'desc': '即液基薄层细胞学检查。是筛查宫颈早期病变较先进的检测方法，同时还能发现部分癌前病变，微生物感染如霉菌、滴虫、病毒、衣原体、人乳头瘤病毒等。'
                        }
                    ]
                }
            ],
            [
                {
                    name: '全面肿瘤筛查加项包',
                    price: 199,
                    imgUrl: '/static/images/order/icon_upgrade.png',
                    detail: [
                        {
                            'name': '癌抗原19-9',
                            'desc': '可用于胰腺癌、胆道恶性肿瘤、结肠癌等恶性肿瘤的辅助筛查'
                        }, {
                            'name': '糖类抗原15-3',
                            'desc': '用于乳腺癌、转移性乳腺癌、肝癌等恶性肿瘤的辅助筛查及疾病进展监测'
                        }, {
                            'name': '游离前列腺特异性抗原',
                            'desc': '用于前列腺癌、前列腺增生、肿大的辅助筛查'
                        }, {
                            'name': '细胞角蛋白',
                            'desc': '可用于筛查非小细胞肺癌等疾病'
                        }, {
                            'name': '神经元特异性烯醇化酶',
                            'desc': '用于小细胞肺癌、神经母细胞瘤等疾病的辅助筛查'
                        }, {
                            'name': '癌抗原50',
                            'desc': '广谱肿瘤标志物，用于肺癌、肝癌、胃癌、结直肠癌的辅助诊断和监测肿瘤进展'
                        }, {
                            'name': '癌抗原724',
                            'desc': '用于胃癌、各种消化道癌症的筛查'
                        }, {
                            'name': '人绒毛膜促性腺激素',
                            'desc': '对于卵巢癌、绒癌等肿瘤具有一定的提示作用'
                        }]
                },
                {
                    name: '骨密度检测加项包',
                    price: 79,
                    imgUrl: '/static/images/order/icon_bone.png',
                    detail: [
                        {
                            'name': '骨密度检测',
                            'desc': '观察骨密度变化，推测骨质疏松的程度，预测骨折的危险性'
                        }
                    ]
                },
                {
                    name: '女性尊享加项包（女）',
                    price: 159,
                    imgUrl: '/static/images/order/icon_woman.png',
                    detail: [
                        {
                            'name': '宫颈TCT',
                            'desc': '即液基薄层细胞学检查。是筛查宫颈早期病变较先进的检测方法，同时还能发现部分癌前病变，微生物感染如霉菌、滴虫、病毒、衣原体、人乳头瘤病毒等。'
                        },
                        {
                            'name': '乳腺彩超',
                            'desc': '通过彩色超声仪器检查乳腺，发现乳腺增生、肿物、结节、囊肿、腺瘤、乳腺癌等病变。'
                        }
                    ]
                }
            ]
        ],
        'GDS905135589': [
            {
                name: '增加骨密度检查',
                price: 79,
                imgUrl: '/static/images/order/icon_bone.png',
                detail: [
                    {
                        'name': '骨密度检查',
                        'desc': '可用于预测骨营养状态，反映骨质疏松程度，进行骨折风险评估，是骨骼强度的一个重要指标，尤其适用于50岁以上的中老年群体'
                    }]
            },
            {
                name: '增加心脏彩超检查',
                price: 109,
                imgUrl: '/static/images/order/icon_heart.png',
                detail: [
                    {
                        'name': '心脏彩超',
                        'desc': '用于检查冠心病 、风心病、所累及的心脏各瓣膜病变，以及各种心肌病、高血压性心脏病、室壁瘤、心脏粘液瘤等'
                    }
                ]
            },
            {
                name: '升级至肿瘤12项筛查',
                price: 199,
                imgUrl: '/static/images/order/icon_upgrade.png',
                detail: [
                    {
                        'name': '肿瘤CEA',
                        'desc': '用于原发性肝癌、病毒性肝炎、肝硬化、睾丸癌、畸胎瘤等疾病的筛查'
                    },
                    {
                        'name': '肿瘤AFP',
                        'desc': '用于结肠癌、直肠癌、胰腺癌的辅助诊断和疗效判断；胃癌、乳腺癌、肺癌等也可导致其升高'
                    },
                    {
                        'name': 'TPSA',
                        'desc': '用于前列腺癌、前列腺增生、肿大的辅助筛查'
                    },
                    {
                        'name': 'FPSA',
                        'desc': 'FPSA/TPSA比值，对前列腺癌和前列腺良性增生的辅助鉴别具有重要意义'
                    },
                    {
                        'name': 'CA153',
                        'desc': '用于乳腺癌、转移性乳腺癌、肝癌、卵巢癌、胰腺癌、肺癌等恶性肿瘤的辅助筛查及疾病进展监测'
                    },
                    {
                        'name': 'CA125',
                        'desc': '胰腺癌、胆道恶性肿瘤的诊断及胃肠道、甲状腺肿瘤的诊断和疗效监测'
                    },
                    {
                        'name': 'CA199',
                        'desc': '可用于卵巢癌的辅助筛查'
                    },
                    {
                        'name': 'CA242',
                        'desc': '用于筛查胰腺癌、结肠癌等'
                    },
                    {
                        'name': 'CA50',
                        'desc': '用于肺癌、肝癌、胃癌、卵巢或子宫颈癌、胰或胆管癌的辅助筛查；直肠癌、膀胱癌也可导致其升高'
                    },
                    {
                        'name': 'CK-19',
                        'desc': '可用于筛查非小细胞肺癌等疾病'
                    },
                    {
                        'name': 'NSE',
                        'desc': '用于小细胞肺癌、神经母细胞瘤、神经内分泌细胞肿瘤(如嗜铬细胞瘤、胰岛细胞瘤、黑色素瘤)等辅助筛查'
                    },
                    {
                        'name': 'β-HCG',
                        'desc': '对于卵巢癌、绒癌等妇科肿瘤具有一定的提示作用'
                    }
                ]
            }
        ],
        'GDS349557890': [
            [
                {
                    name: '全面肿瘤筛查加项包',
                    price: 199,
                    imgUrl: '/static/images/order/icon_upgrade.png',
                    detail: [
                        {
                            'name': '癌抗原19-9',
                            'desc': '可用于胰腺癌、胆道恶性肿瘤、结肠癌等恶性肿瘤的辅助筛查'
                        }, {
                            'name': '糖类抗原15-3',
                            'desc': '用于乳腺癌、转移性乳腺癌、肝癌等恶性肿瘤的辅助筛查及疾病进展监测'
                        }, {
                            'name': '游离前列腺特异性抗原',
                            'desc': '用于前列腺癌、前列腺增生、肿大的辅助筛查'
                        }, {
                            'name': '细胞角蛋白',
                            'desc': '可用于筛查非小细胞肺癌等疾病'
                        }, {
                            'name': '神经元特异性烯醇化酶',
                            'desc': '用于小细胞肺癌、神经母细胞瘤等疾病的辅助筛查'
                        }, {
                            'name': '癌抗原50',
                            'desc': '广谱肿瘤标志物，用于肺癌、肝癌、胃癌、结直肠癌的辅助诊断和监测肿瘤进展'
                        }, {
                            'name': '癌抗原724',
                            'desc': '用于胃癌、各种消化道癌症的筛查'
                        }, {
                            'name': '人绒毛膜促性腺激素',
                            'desc': '对于卵巢癌、绒癌等肿瘤具有一定的提示作用'
                        }]
                },
                {
                    name: '骨密度检测加项包',
                    price: 79,
                    imgUrl: '/static/images/order/icon_bone.png',
                    detail: [
                        {
                            'name': '骨密度检测',
                            'desc': '观察骨密度变化，推测骨质疏松的程度，预测骨折的危险性'
                        }
                    ]
                },
                {
                    name: '宫颈癌筛查加项包（女）',
                    price: 109,
                    imgUrl: '/static/images/order/icon_woman.png',
                    detail: [
                        {
                            'name': '宫颈TCT',
                            'desc': '即液基薄层细胞学检查。是筛查宫颈早期病变较先进的检测方法，同时还能发现部分癌前病变，微生物感染如霉菌、滴虫、病毒、衣原体、人乳头瘤病毒等。'
                        }
                    ]
                }
            ],
            [
                {
                    name: '全面肿瘤筛查加项包',
                    price: 199,
                    imgUrl: '/static/images/order/icon_upgrade.png',
                    detail: [
                        {
                            'name': '癌抗原19-9',
                            'desc': '可用于胰腺癌、胆道恶性肿瘤、结肠癌等恶性肿瘤的辅助筛查'
                        }, {
                            'name': '糖类抗原15-3',
                            'desc': '用于乳腺癌、转移性乳腺癌、肝癌等恶性肿瘤的辅助筛查及疾病进展监测'
                        }, {
                            'name': '游离前列腺特异性抗原',
                            'desc': '用于前列腺癌、前列腺增生、肿大的辅助筛查'
                        }, {
                            'name': '细胞角蛋白',
                            'desc': '可用于筛查非小细胞肺癌等疾病'
                        }, {
                            'name': '神经元特异性烯醇化酶',
                            'desc': '用于小细胞肺癌、神经母细胞瘤等疾病的辅助筛查'
                        }, {
                            'name': '癌抗原50',
                            'desc': '广谱肿瘤标志物，用于肺癌、肝癌、胃癌、结直肠癌的辅助诊断和监测肿瘤进展'
                        }, {
                            'name': '癌抗原724',
                            'desc': '用于胃癌、各种消化道癌症的筛查'
                        }, {
                            'name': '人绒毛膜促性腺激素',
                            'desc': '对于卵巢癌、绒癌等肿瘤具有一定的提示作用'
                        }]
                },
                {
                    name: '骨密度检测加项包',
                    price: 79,
                    imgUrl: '/static/images/order/icon_bone.png',
                    detail: [
                        {
                            'name': '骨密度检测',
                            'desc': '观察骨密度变化，推测骨质疏松的程度，预测骨折的危险性'
                            >>> >>> > release
                        }
                    ]
                },
                {
                    name: '女性尊享加项包（女）',
                    price: 159,
                    imgUrl: '/static/images/order/icon_woman.png',
                    detail: [
                        {
                            'name': '宫颈TCT',
                            'desc': '即液基薄层细胞学检查。是筛查宫颈早期病变较先进的检测方法，同时还能发现部分癌前病变，微生物感染如霉菌、滴虫、病毒、衣原体、人乳头瘤病毒等。'
                        },
                        {
                            'name': '乳腺彩超',
                            'desc': '通过彩色超声仪器检查乳腺，发现乳腺增生、肿物、结节、囊肿、腺瘤、乳腺癌等病变。'
                        }
                    ]
                }
            ]],
        'GDS110010001': {
            main: {
                name: '增加肿瘤筛查及腹部B超',
                price: 99,
                detail: [
                    {
                        'name': '肿瘤CEA',
                        'desc': '用于结肠癌、直肠癌、胰腺癌的辅助诊断和疗效判断；胃癌、乳腺癌、肺癌等也可导致其升高'
                    },
                    {
                        'name': '肿瘤AFP',
                        'desc': '用于原发性肝癌、病毒性肝炎、肝硬化、睾丸癌、畸胎瘤等疾病的筛查'
                    },
                    {
                        'name': '肾功能肌酐',
                        'desc': '用于高血压、高血糖等病人的并发症判断；并可用于肾脏功能状态观察，是常用泌尿系统疾病的辅助检查'
                    },
                    {
                        'name': '腹部B超',
                        'desc': '用于辅助判断肝癌、肝硬化、脂肪肝、胆结石等疾病；无创检查肝、胆、胰腺、脾脏等腹部器官的形态结构并观察是否有占位、炎症、器质性改变等异常'
                    }]
            },
            sub: [
                {
                    name: '增加妇科专项检查',
                    price: 99,
                    detail: [
                        {
                            'name': '宫颈刮片',
                            'desc': '用于早期宫颈癌、癌前病变等生殖系统疾病辅助筛查，是女性生殖系统健康的最基本检查方法'
                        },
                        {
                            'name': '子宫附件B超',
                            'desc': '用于子宫肿瘤、子宫肌瘤、附件占位、盆腔积液等妇科常见疾病辅助检查'
                        },
                        {
                            'name': '白带常规',
                            'desc': '了解阴道清洁度及妇科炎症，如阴道炎及性病等'
                        }]
                },
                {
                    name: '增加男性专项检查',
                    price: 99,
                    detail: [
                        {
                            'name': '胸片(不出片)',
                            'desc': '用于辅助检查肺部炎症、肿瘤、结核等疾病，观察肺部情况；尤其适用于长期接触雾霾、粉尘及吸烟的人群'
                        },
                        {
                            'name': '前列腺彩超',
                            'desc': '用于辅助前列腺癌、前列腺肿大、囊肿、结石或其他病变的检查'
                        }]
                }
            ]
        }

    }

    if (_goodsCode == 'GDS110010004' || _goodsCode == 'GDS349557890') {
        if (g_source == 2) {
            _goodsdata = GOODSDATALIB[_goodsCode][1];
            _addPkgdata = addPkgDetailLib[_goodsCode][1];
        }
        else {
            _goodsdata = GOODSDATALIB[_goodsCode][0];
            _addPkgdata = addPkgDetailLib[_goodsCode][0];
        }
        switch (parseInt(_num)) {
            case 1:
                shan.tools.statisticsPing('33320101');
                break;
            case 2:
                shan.tools.statisticsPing('333201011');
                break;
            case 3:
                shan.tools.statisticsPing('333201012');
                break;
            case 4:
                shan.tools.statisticsPing('333201013');
                break;
            default:
                break;
        }
    }
    else if (_goodsCode == 'GDS110010003') {
        _goodsdata = GOODSDATALIB[_goodsCode];
        _addPkgdata = addPkgDetailLib[_goodsCode];
        switch (parseInt(_num)) {
            case 1:
                shan.tools.statisticsPing('33310101');
                break;
            case 2:
                shan.tools.statisticsPing('333101011');
                break;
            case 3:
                shan.tools.statisticsPing('333101012');
                break;
            case 4:
                shan.tools.statisticsPing('333101013');
                break;
            default:
                break;
        }
    }
    else if (_goodsCode == 'GDS110010001') {
        _goodsdata = GOODSDATALIB[_goodsCode];
        _addPkgdata = addPkgDetailLib[_goodsCode];
        switch (parseInt(_num)) {
            case 1:
                // shan.tools.statisticsPing('33310101');
                break;
            case 2:
                // shan.tools.statisticsPing('333101011');
                break;
            case 3:
                // shan.tools.statisticsPing('333101012');
                break;
            case 4:
                // shan.tools.statisticsPing('333101013');
                break;
            default:
                break;
        }
    }


    var tjPersonInfo = [];
    for (var i = 0; i < parseInt(_num); i++) {
        tjPersonInfo.push({
            goodsCode: _goodsCode,
            goodsData: _goodsdata,
            addPkgData: _addPkgdata,
            add_pkg: 0
        })
    }


    var f = {
        init: function () {
            $(function () {
                FastClick.attach(document.body);
                cityinstit.linkCss();
            });


            //善诊用户协议
            $('#sDealCheck').click(function () {
                if ($(this).children('input[type="checkbox"]').prop('checked')) {
                    $(this).children('input[type="checkbox"]').prop('checked', false);
                    $('#confirmBtn').addClass('yo-btn-disabled');
                }
                else {
                    $(this).children('input[type="checkbox"]').prop('checked', true);
                    $('#confirmBtn').removeClass('yo-btn-disabled');
                }
            });

            $('#sDealBtn').click(function () {
                $('#pmask').removeClass('hidden');
                $('#userAgreement').show();
            });
            $('.pCloseBtn').click(function () {
                $('#userAgreement').hide();
                $('#pmask').addClass('hidden');
                $('#pmask2').addClass('hidden');
                $('#tipsBox').hide();
                $('#settBox').hide();
                $('#sureBox').hide();
            });
            $('.know-btn').click(function () {
                $('#pmask2').addClass('hidden');
                $('#tipsBox').hide();
                $('#settBox').hide();
                $('#sureBox').hide();
            });
            $('#pmask').click(function () {
                $('#userAgreement').hide();
                $('#verifyCode').addClass('hidden');
                $('#pmask').addClass('hidden');
                $('#pmask2').addClass('hidden');
            });

            $('#watchMore').click(function () {
                $(this).parent('.add-item-inner').removeClass('hasMoreInfo');
                $(this).hide();
            });

            $('#watchMore_2').click(function () {
                $(this).parent('.add-item-inner').removeClass('hasMoreInfo');
                $(this).hide();
            });

        }
    };

//兑换口令浮层
    var exchangeCouponDialog = pop.layer({
        ele: $('#exchangeCouponDialog'),
        onShow: function () {
            // 54009    活动框架—下单页—兑换抵扣券浮层展现
            shan.tools.statisticsPing("54009");
        },
        bindEvent: function (layer) {
            layer.ele.find('#exchangeCouponBtn').off('touchend').on('touchend', function (e) {
                var szCodeInput = $('#exChangeCouponInput');
                if (szCodeInput.val() != "") {
                    order.exchangeCoupon(szCodeInput.val());
                }
                else {
                    pop.alert("请输入兑换口令");
                }
                // 54010    活动框架—下单页—兑换抵扣券浮层—兑换按钮
                shan.tools.statisticsPing("54010");
                e.preventDefault();
            });
        }
    });

//没有兑换卷浮层
    var noTicketDialog = pop.layer({
        ele: $('#noTicketDialog'),
        bindEvent: function (layer) {
            layer.ele.find('.haveSzCode').off('touchend').on('touchend', function (e) {
                layer.hide();
                sharePromptDialog.hide();
                exchangeCouponBottomDialog.show();
                exchangeCouponDialog.show();
                // 54008    活动框架—下单页—无抵扣券浮层—我有善诊口令
                shan.tools.statisticsPing("54008");
                e.preventDefault();
            });
        }
    });

//兑换卷列表浮层
    var ticketListDialog = pop.layer({
        ele: $('#ticketListDialog'),
        bindEvent: function (layer) {
            layer.ele.find('.haveSzCode').off('touchend').on('touchend', function (e) {
                layer.hide();
                exchangeCouponDialog.show();
                // 54007    活动框架—下单页—抵扣券浮层—我有善诊口令
                shan.tools.statisticsPing("54007");
                e.preventDefault();
            });
            layer.ele.find('#couponChooseBtn').off('touchend').on('touchend', function (e) {
                // 9月27日 修改活动框架逻辑by wangqiao
                //if (order.isNeedConfirm) {
                //    order.confirmOrder();
                //}
                //else {
                //    layer.hide();
                //}
                layer.hide();
                e.preventDefault();
            });
        }
    });

//兑换口令卷-兑换按钮
    var exchangeCouponBottomDialog = pop.layer({
        ele: $('#exchangeCouponBottom'),
        mask: false
    });

//口令用完-显示分享层
    var sharePromptDialog = pop.layer({
        ele: $('#sharePrompt'),
        mask: false,
        bindEvent: function (layer) {
            layer.ele.find('.shareList').off('touchend').on('touchend', function (e) {
                share.shareTipsLayer.show();
                e.preventDefault();
            });
        }
    });


    if (g_powerParalleling == 3) {
        Vue.component('order-paralle', {
            props: ['index', 'pkginfo'],
            data: function () {
                return {
                    isOpenAdded1: false,
                    isOpenAdded2: false,
                    isOpenAdded3: false,
                    goodsName: g_goodsName,
                    goodsCode: _goodsCode,
                    addpkgPrice: 0,
                    defaultGoodsCode: _goodsCode,
                    defaultGoodsName: g_goodsName
                };
            },
            methods: {
                countGoods: function () {

                    if (this.isOpenAdded1 && !this.isOpenAdded2 && !this.isOpenAdded3) { //选1
                        this.goodsName = this.pkginfo.goodsData[0].goodsName;
                        this.$emit("sel-goods", 0, this.index);
                    } else if (!this.isOpenAdded1 && this.isOpenAdded2 && !this.isOpenAdded3) { //选2
                        this.goodsName = this.pkginfo.goodsData[1].goodsName;
                        this.$emit("sel-goods", 1, this.index);
                    } else if (!this.isOpenAdded1 && !this.isOpenAdded2 && this.isOpenAdded3) { //选3
                        this.goodsName = this.pkginfo.goodsData[2].goodsName;
                        this.$emit("sel-goods", 2, this.index);
                    } else if (this.isOpenAdded1 && this.isOpenAdded2 && !this.isOpenAdded3) { //选1 2
                        this.goodsName = this.pkginfo.goodsData[3].goodsName;
                        this.$emit("sel-goods", 3, this.index);
                    } else if (this.isOpenAdded1 && !this.isOpenAdded2 && this.isOpenAdded3) {//选1 3
                        this.goodsName = this.pkginfo.goodsData[4].goodsName;
                        this.$emit("sel-goods", 4, this.index);
                    } else if (!this.isOpenAdded1 && this.isOpenAdded2 && this.isOpenAdded3) {//选2 3
                        this.goodsName = this.pkginfo.goodsData[5].goodsName;
                        this.$emit("sel-goods", 5, this.index);
                    } else if (this.isOpenAdded1 && this.isOpenAdded2 && this.isOpenAdded3) { //选1 2 3
                        this.goodsName = this.pkginfo.goodsData[6].goodsName;
                        this.$emit("sel-goods", 6, this.index);
                    } else {
                        this.goodsName = this.defaultGoodsName;
                        this.$emit("sel-goods", -1, this.index);
                    }
                }
                ,
                openAdded: function (index) {
                    console.log(this.index)
                    if (index == 1) {
                        this.isOpenAdded1 = !this.isOpenAdded1;
                        if (this.isOpenAdded1) {
                            if (this.defaultGoodsCode == 'GDS110010003') {
                                if (this.index == 0) {
                                    shan.tools.statisticsPing('33310104');
                                }
                                else {
                                    shan.tools.statisticsPing('33310110');
                                }
                            ======
                                =
                                    openAdded
                            :

                                function (index) {
                                    console.log(this.index)
                                    if (index == 1) {
                                        this.isOpenAdded1 = !this.isOpenAdded1;
                                        if (this.isOpenAdded1) {
                                            if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                                                if (this.index == 0) {
                                                    shan.tools.statisticsPing('33310104');
                                                >>>>>>>
                                                    release
                                                }
                                                else if (this.defaultGoodsCode == 'GDS110010004') {
                                                    if (this.index == 0) {
                                                        shan.tools.statisticsPing('33320117');
                                                    }
                                                    else {
                                                        shan.tools.statisticsPing('33320125');
                                                    }
                                                }
                                            }
                                        <<<<<<<
                                            HEAD
                                        else
                                            {
                                                if (this.defaultGoodsCode == 'GDS110010003') {
                                                    if (this.index == 0) {
                                                        shan.tools.statisticsPing('33310105');
                                                    }
                                                    else {
                                                        shan.tools.statisticsPing('33310111');
                                                    }
                                                ======
                                                    =
                                                else
                                                    if (this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') {
                                                        if (this.index == 0) {
                                                            shan.tools.statisticsPing('33320117');
                                                        >>>>>>>
                                                            release
                                                        }
                                                        else if (this.defaultGoodsCode == 'GDS110010004') {
                                                            if (this.index == 0) {
                                                                shan.tools.statisticsPing('33320118');
                                                            }
                                                            else {
                                                                shan.tools.statisticsPing('33320126');
                                                            }
                                                        }
                                                    }
                                                }
                                            <<<<<<<
                                                HEAD
                                            else
                                                if (index == 2) {
                                                    this.isOpenAdded2 = !this.isOpenAdded2;
                                                    if (this.isOpenAdded2) {
                                                        if (this.defaultGoodsCode == 'GDS110010003') {
                                                            if (this.index == 0) {
                                                                shan.tools.statisticsPing('33310106');
                                                            }
                                                            else {
                                                                shan.tools.statisticsPing('33310112');
                                                            }
                                                        ======
                                                            =
                                                        else
                                                            {
                                                                if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                                                                    if (this.index == 0) {
                                                                        shan.tools.statisticsPing('33310105');
                                                                    >>>>>>>
                                                                        release
                                                                    }
                                                                    else if (this.defaultGoodsCode == 'GDS110010004') {
                                                                        if (this.index == 0) {
                                                                            shan.tools.statisticsPing('33320119');
                                                                        }
                                                                        else {
                                                                            shan.tools.statisticsPing('33320127');
                                                                        }
                                                                    }
                                                                }
                                                            <<<<<<<
                                                                HEAD
                                                            else
                                                                {
                                                                    if (this.defaultGoodsCode == 'GDS110010003') {
                                                                        if (this.index == 0) {
                                                                            shan.tools.statisticsPing('33310107');
                                                                        }
                                                                        else {
                                                                            shan.tools.statisticsPing('33310113');
                                                                        }
                                                                    ======
                                                                        =
                                                                    else
                                                                        if (this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') {
                                                                            if (this.index == 0) {
                                                                                shan.tools.statisticsPing('33320118');
                                                                            >>>>>>>
                                                                                release
                                                                            }
                                                                            else if (this.defaultGoodsCode == 'GDS110010004') {
                                                                                if (this.index == 0) {
                                                                                    shan.tools.statisticsPing('33320120');
                                                                                }
                                                                                else {
                                                                                    shan.tools.statisticsPing('33320128');
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                <<<<<<<
                                                                    HEAD
                                                                else
                                                                    if (index == 3) {
                                                                        this.isOpenAdded3 = !this.isOpenAdded3;
                                                                        if (this.isOpenAdded3) {
                                                                            if (this.defaultGoodsCode == 'GDS110010003') {
                                                                                if (this.index == 0) {
                                                                                    shan.tools.statisticsPing('33310102');
                                                                                }
                                                                                else {
                                                                                    shan.tools.statisticsPing('33310108');
                                                                                }
                                                                            }
                                                                            else if (this.defaultGoodsCode == 'GDS110010004' && g_source != '2') {
                                                                                if (this.index == 0) {
                                                                                    shan.tools.statisticsPing('33320121');
                                                                                }
                                                                                else {
                                                                                    shan.tools.statisticsPing('33320129');
                                                                                }
                                                                            ======
                                                                                =
                                                                            }
                                                                            else if (index == 2) {
                                                                                this.isOpenAdded2 = !this.isOpenAdded2;
                                                                                if (this.isOpenAdded2) {
                                                                                    if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                                                                                        if (this.index == 0) {
                                                                                            shan.tools.statisticsPing('33310106');
                                                                                        }
                                                                                        else {
                                                                                            shan.tools.statisticsPing('33310112');
                                                                                        }
                                                                                    }
                                                                                    else if (this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') {
                                                                                        if (this.index == 0) {
                                                                                            shan.tools.statisticsPing('33320119');
                                                                                        >>>>>>>
                                                                                            release
                                                                                        }
                                                                                        else if (this.defaultGoodsCode == 'GDS110010004' && g_source == '2') {
                                                                                            if (this.index == 0) {
                                                                                                shan.tools.statisticsPing('33320123');
                                                                                            }
                                                                                            else {
                                                                                                shan.tools.statisticsPing('33320131');
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                <<<<<<<
                                                                                    HEAD
                                                                                else
                                                                                    {
                                                                                        if (this.defaultGoodsCode == 'GDS110010003') {
                                                                                            if (this.index == 0) {
                                                                                                shan.tools.statisticsPing('33310103');
                                                                                            }
                                                                                            else {
                                                                                                shan.tools.statisticsPing('33310109');
                                                                                            }
                                                                                        }
                                                                                        else if (this.defaultGoodsCode == 'GDS110010004' && g_source != '2') {
                                                                                            if (this.index == 0) {
                                                                                                shan.tools.statisticsPing('33320122');
                                                                                            }
                                                                                            else {
                                                                                                shan.tools.statisticsPing('33320130');
                                                                                            }
                                                                                        ======
                                                                                            =
                                                                                        }
                                                                                        else {
                                                                                            if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                                                                                                if (this.index == 0) {
                                                                                                    shan.tools.statisticsPing('33310107');
                                                                                                }
                                                                                                else {
                                                                                                    shan.tools.statisticsPing('33310113');
                                                                                                }
                                                                                            }
                                                                                            else if (this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') {
                                                                                                if (this.index == 0) {
                                                                                                    shan.tools.statisticsPing('33320120');
                                                                                                >>>>>>>
                                                                                                    release
                                                                                                }
                                                                                                else if (this.defaultGoodsCode == 'GDS110010004' && g_source == '2') {
                                                                                                    if (this.index == 0) {
                                                                                                        shan.tools.statisticsPing('33320124');
                                                                                                    }
                                                                                                    else {
                                                                                                        shan.tools.statisticsPing('33320132');
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                        this.countGoods();
                                                                                    }
                                                                                <<<<<<<
                                                                                    HEAD
                                                                                }
                                                                            }
                                                                        )
        ;
    } else if (g_powerParalleling == 1) {
        Vue.component('order-embody', {
            props: ['index', 'pkginfo'],
            data: function () {
                return {
                    isOpen: false,
                    isOpenAdded1: false,
                    isOpenAdded2: false,
                    goodsName: g_goodsName,
                    goodsCode: _goodsCode,
                    addpkgPrice: 0,
                    defaultGoodsCode: _goodsCode,
                    defaultGoodsName: g_goodsName
                };
            },
            // props: ['goodsCode'],
            methods: {
                open: function () {
                    if (this.isOpen) { //取消选中
                        shan.tools.statisticsPing("100011");
                        this.isOpen = false;
                        this.isOpenAdded1 = false;
                        this.isOpenAdded2 = false;
                        this.$emit("sel-goods", -1);

                        if (g_source == 2) {
                            shan.tools.statisticsPing(100005);
                        } else {
                            shan.tools.statisticsPing(100004);
                        }
                    }
                    else { //选中
                        shan.tools.statisticsPing("100010");
                        this.isOpen = true;
                        this.isOpenAdded1 = false;
                        this.isOpenAdded2 = false;
                        this.$emit("sel-goods", 0);

                        if (g_source == 2) {
                            shan.tools.statisticsPing(100003);
                        } else {
                            shan.tools.statisticsPing(100002);
                        ======
                            =
                        else
                            if (index == 3) {
                                this.isOpenAdded3 = !this.isOpenAdded3;
                                if (this.isOpenAdded3) {
                                    if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                                        if (this.index == 0) {
                                            shan.tools.statisticsPing('33310102');
                                        }
                                        else {
                                            shan.tools.statisticsPing('33310108');
                                        }
                                    }
                                    else if ((this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') && g_source != '2') {
                                        if (this.index == 0) {
                                            shan.tools.statisticsPing('33320121');
                                        }
                                        else {
                                            shan.tools.statisticsPing('33320129');
                                        }
                                    }
                                    else if ((this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') && g_source == '2') {
                                        if (this.index == 0) {
                                            shan.tools.statisticsPing('33320123');
                                        }
                                        else {
                                            shan.tools.statisticsPing('33320131');
                                        }
                                    }
                                }
                                else {
                                    if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                                        if (this.index == 0) {
                                            shan.tools.statisticsPing('33310103');
                                        }
                                        else {
                                            shan.tools.statisticsPing('33310109');
                                        }
                                    }
                                    else if ((this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') && g_source != '2') {
                                        if (this.index == 0) {
                                            shan.tools.statisticsPing('33320122');
                                        }
                                        else {
                                            shan.tools.statisticsPing('33320130');
                                        }
                                    }
                                    else if ((this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') && g_source == '2') {
                                        if (this.index == 0) {
                                            shan.tools.statisticsPing('33320124');
                                        }
                                        else {
                                            shan.tools.statisticsPing('33320132');
                                        }
                                    >>>>>>>
                                        release
                                    }
                                }
                            }
                        ,
                            openAdded1: function () {
                                if (this.isOpenAdded1) { //取消选中
                                    shan.tools.statisticsPing("100014");
                                    this.isOpenAdded1 = false;
                                    this.isOpenAdded2 = false;
                                    this.$emit("sel-goods", 0);
                                }
                                else { //选中
                                    shan.tools.statisticsPing("100013");
                                    this.isOpenAdded1 = true;
                                    this.isOpenAdded2 = false;
                                    this.$emit("sel-goods", 1);
                                }
                            }
                        ,
                            openAdded2: function () {
                                if (this.isOpenAdded2) { //取消选中
                                    shan.tools.statisticsPing("100016");
                                    this.isOpenAdded1 = false;
                                    this.isOpenAdded2 = false;
                                    this.$emit("sel-goods", 0);
                                }
                                else { //选中
                                    shan.tools.statisticsPing("100015");
                                    this.isOpenAdded1 = false;
                                    this.isOpenAdded2 = true;
                                    this.$emit("sel-goods", 2);
                                }
                            }
                        }
                    }
                );
    }


    var order = new Vue({
        el: "#orderDetail",
        data: {
            defaultGoodsCode: "", //原始商品ID,
            defaultGoodsName: "", //原始商品名称,
            goodsName: "", //商品名称
            goodsCode: '', //商品ID（可能会变化）
            cityBoxShow: false,     //可选城市（孝心套餐时显示）
            originPrice: 0, //商品原价（不变）
            activityPrice: 0, //商品原活动价（不变）
            actualOrgPrice: 0, //商品的实际原价
            actualPrice: 0, //下单的实际价格
            servicePrice: 0, //服务产品的价格
            //addedPrice: 0, //附加项目的价格
            ticketStatusClass: "", //使用卷状态 hasTicket noTicket needLogin
            ticketSrc: "",//不用使用卷状态下的icon
            ticketText: "", //不用使用卷状态下的文字描述
            ticketTitleText: "使用口令/抵扣券", //使用口令/抵扣券
            hasTicketText: "", //选择了卷后的文字描述
            contactPhone: "", //用户联系电话
            isLogin: 0, //是否登录
            ticketStatusShow: false, //是否展示"请选择券按钮" 仅仅在hasTicket状态下展示
            isHasTicket: false, //用户是否持有优惠卷
            isNeedConfirm: false, //是否选择了优惠卷立即下单
            isUseTicket: false, //用户是否选择了优惠卷
            couponIds: [], //用户选择的卷ID
            ticketAmt: 0, //用户选择的卷面价格
            phoneVerifyCode: "", //电话验证码
            isApiLoading: false, //是否正确请求中
            serviceCode: "", //服务单ID
            testVersion: "", //订单埋点上报
            orderFrom: 1, //订单来源 1主站 2活动框架
            isFirstOrder: true, //是否第一次下单 0是 1不是
            phoneHeaderTxet: "", //已经登录时展示'当前账号'  否则'+86'
            currentTimer: 60, //收到验证码后的等待时间
            isSendingCode: false, // 是否发送验证码
            timerId: "", //监听等待时间的id
            verifyCodeBtnTxt: "获取验证码",
            goodsData: _goodsdata, // 升级项的数据
            source: 0,
            needServiceCustomization: 0,//1代表需要医生定制，0代表不需要医生定制
            showCustomizationWords: true,
            insuPrice: 0,
            postData: {},
            insuranceTipsShow: false,
            isMonthPay: 0,
            insuranceGoodsCode: 'GDS356696703',
            addPkgData: _addPkgdata,
            tjPersonInfo: tjPersonInfo,
            goodsChosedList: []
        },
        mounted: function () {

        },
        created: function () {
            try {
                var obj = JSON.parse(g_goods),
                    goods = obj.goods;
                this.defaultGoodsCode = goods.goodsCode;
                this.defaultGoodsName = goods.goodsName;
                this.goodsName = goods.goodsName;
                this.goodsCode = goods.goodsCode;
                this.originPrice = (goods.originPrice / 1000) * _num;
                this.activityPrice = (goods.activityPrice / 1000) * _num;
                this.actualOrgPrice = this.originPrice;
                this.actualPrice = this.activityPrice;
                this.supportSzServiceList = goods.supportSzServiceList ? goods.supportSzServiceList : [];
                this.isLogin = g_isLogin;
                this.source = g_source;
                //如果用户登录了 并且持有卷就默认帮他使用卷
                if (this.isLogin == 1 && obj.ticketNum != 0) {
                    this.isHasTicket = true;
                    this.ticketAmt = obj.ticketAmt;
                    //this.couponIds.push(obj.couponIds);
                    this.couponIds = obj.couponIds.split(',');

                    this.ticketStatus = true;
                }
                else {
                    this.ticketStatus = false;
                }
                //孝心套餐则显示可选城市按钮
                if (this.defaultGoodsCode == 'GDS110010001') {
                    this.cityBoxShow = true;
                }
                this.contactPhone = obj.contactPhone;
                this.orderFrom = shan.tools.getUrlParam("orderFrom");
                for (var i = 0; i < _num; i++) {
                    this.goodsChosedList.push({
                        goodsCode: this.defaultGoodsCode,
                        addedPrice: 0
                    })
                }
                this.countPrice();

            } catch (e) {
                pop.alert("初始化商品失败", function () {
                    history.go(-1);
                    return false;
                });
            }

        },
        computed: {
            ticketStatus: {
                set: function (isUseTicket) {

                    if (this.isLogin == 0) { //未登录
                        this.ticketStatusClass = "needLogin";
                        this.ticketText = "登录后查看";
                        this.ticketTitleText = "使用口令/抵扣券";
                        this.ticketSrc = "/static/images/redPacket/icon_ticket_none.png";
                        this.phoneHeaderTxet = "+ 86";
                        this.ticketStatusShow = false;
                        this.isUseTicket = false;
                        this.isHasTicket = false;
                    }
                    else {
                        this.phoneHeaderTxet = "当前账号";
                        if (isUseTicket) { //使用卷
                            this.ticketStatusClass = "hasTicket";
                            this.ticketText = "";
                            this.ticketStatusShow = true;
                            this.ticketSrc = "/static/images/redPacket/icon_ticket.png";
                            this.isUseTicket = true;
                            this.hasTicketText = "减免" + this.ticketAmt + "元";
                            this.isHasTicket = true;
                            this.ticketTitleText = "已自动使用使用" + this.couponIds.length + "张优惠券";
                        }
                        else { //没有使用优惠卷
                            if (this.isHasTicket) { //有优惠卷
                                this.ticketStatusClass = "hasTicket";
                                this.ticketText = "";
                                this.ticketStatusShow = true;
                                this.ticketSrc = "/static/images/redPacket/icon_ticket.png";
                                this.isUseTicket = false;
                                this.hasTicketText = "请选择券";
                                this.ticketTitleText = "使用口令/抵扣券";
                            }
                            else { //没有优惠卷
                                this.ticketStatusClass = "noTicket";
                                this.ticketText = "暂无可用券";
                                this.ticketSrc = "/static/images/redPacket/icon_ticket_none.png";
                                this.ticketStatusShow = false;
                                this.isUseTicket = false;
                                this.ticketTitleText = "使用口令/抵扣券";
                            }

                        }
                    }

                }
            },
            addedPrice: function () {//附加项目的价格
                var _tem = 0;
                for (var i = 0; i < this.goodsChosedList.length; i++) {
                    _tem += parseInt(this.goodsChosedList[i].addedPrice);
                }
                return _tem;
            }
        },
        methods: {
            addedGoods: function (index, _inx) {
                var tmp_goodsCode = '';
                var tmp_addedPrice = '';
                if (index != "-1" && typeof this.goodsData[index] != "undefined") {
                    tmp_goodsCode = this.goodsData[index].goodsCode;
                    tmp_addedPrice = this.goodsData[index].addedPrice;
                }
                else {
                    tmp_goodsCode = this.defaultGoodsCode;
                    tmp_addedPrice = 0;
                }
                this.goodsChosedList[_inx].goodsCode = tmp_goodsCode;
                this.goodsChosedList[_inx].addedPrice = tmp_addedPrice;
                this.countPrice();
            },
            selTicket: function () {
            <<<<<<<
                HEAD
                if (this.defaultGoodsCode == 'GDS110010003') {
                    shan.tools.statisticsPing("33310116");
                } else if (this.defaultGoodsCode == 'GDS110010004') {
                ======
                    =
                    if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                        shan.tools.statisticsPing("33310116");
                    } else if (this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') {
                    >>>>>>>
                        release
                        shan.tools.statisticsPing("33320116");
                    }
                    if (this.isLogin == 0) { //未登录
                        if (shan.tools.isWeixin() == 1) {
                            window.location.href = "/sz/user/bindphone";
                        }
                        else {
                            window.location.href = "/sz/user/smslogin";
                        }
                    }
                    else {
                        if (this.isUseTicket) { //有使用卷
                            this.isNeedConfirm = false;
                            this.getTicketInfo();
                            ticketListDialog.show();
                            shan.tools.statisticsPing("54005");
                        }
                        else { //没有使用优惠卷
                            if (this.isHasTicket) { //有优惠卷
                                this.isNeedConfirm = false;
                                this.getTicketInfo();
                                ticketListDialog.show();
                            }
                            else { //没有优惠卷
                                exchangeCouponDialog.show();
                                shan.tools.statisticsPing("54006");
                            }

                        }
                    }

                }
            ,
                exchangeCoupon: function (szCode) {
                    shan.ajax({
                        data: {
                            url: '/coupon/exchange_coupon.htm',
                            szCode: szCode
                        },
                        success: function (_json) {
                            if (_json && _json.SZ_HEAD && _json.SZ_HEAD.RESP_CODE == "S0000") {
                                pop.message.show(_json.SZ_BODY.EXCHANGE_MSG);
                                if (_json.SZ_BODY.EXCHANGE_STATUS == 'EXCHANGE_SUCC') {
                                    //todo 显示获取到的抵扣券
                                    exchangeCouponDialog.hide();
                                    //展示兑换卷列表
                                    ticketListDialog.show();
                                    order.isHasTicket = true;
                                    order.getTicketInfo();
                                    order.ticketStatus = false;
                                }
                                else {
                                    if (_json.SZ_BODY.SHOW_SHARE_COUPON == 1 && shan.tools.isWeixin() == 1) {

                                    }
                                    else {
                                        pop.alert(_json.SZ_BODY.EXCHANGE_MSG);
                                    }
                                }

                            }
                        }
                    });
                }
            ,
                checkOrder: function () {
                    if (!/^1\d{10}/.test(this.contactPhone)) {
                        pop.alert("请输入正确的手机号码");
                        return false;
                    }

                    if (this.isLogin == '0' && !/\d{6}/.test(this.phoneVerifyCode)) {
                        pop.alert("请输入正确的手机验证码");
                        return false;
                    }

                    if (!$('#sDealCheck').children('input[type="checkbox"]').prop('checked')) {
                        pop.alert("同意《善诊用户协议》才能进行下一步");
                        return false;
                    }
                    return true;
                }
            ,
                resetCodeTimer: function () {
                    this.currentTimer = 60;

                    function refresh() {
                        order.currentTimer--;
                        if (order.currentTimer >= 0) {
                            order.verifyCodeBtnTxt = order.currentTimer + 's 重新发送';
                            order.isSendingCode = true;
                        } else {
                            order.verifyCodeBtnTxt = '获取验证码';
                            order.isSendingCode = false;
                            clearInterval(order.timerId);
                        }

                    }

                    this.timerId = setInterval(refresh, 1000);
                }
            ,
                sendVerifyCode: function () {
                    if (!/^1\d{10}/.test(this.contactPhone)) {
                        pop.alert("请输入正确的手机号码!");
                        return false;
                    }

                    if (!this.isSendingCode) {
                        this.isSendingCode = true;
                        this.resetCodeTimer();
                        shan.ajax({
                            url: "/sz/index/smsverify",
                            data: {
                                phone: this.contactPhone
                            },
                            success: function (_json) {
                                order.isSendingCode = false;
                                if (_json.SZ_HEAD.RESP_CODE === "S0000") {
                                    pop.alert("验证码已成功发送至您手机中");
                                }
                                else if (_json.SZ_HEAD.RESP_CODE === "-2") {
                                    pop.alert("抱歉，该手机号未注册");
                                }
                                else if (_json.SZ_HEAD.RESP_CODE === "3") {
                                    pop.alert("抱歉，该手机登陆次数过多 请等30分钟后重试");
                                }
                                else if (_json.SZ_HEAD.RESP_CODE === "5") {
                                    pop.alert("抱歉，请刷新页面后重新输入验证码");
                                }
                                else {
                                    pop.alert("发送失败请稍后再试");
                                }

                            }
                        });
                    }
                }
            ,
                confirmOrder: function () {
                    console.log(this.defaultGoodsCode);
                <<<<<<<
                    HEAD
                    if (this.defaultGoodsCode == 'GDS110010003') {
                    ======
                        =
                        if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                        >>>>>>>
                            release
                            shan.tools.statisticsPing("333101151");
                            if (this.isLogin == 1) {
                                shan.tools.statisticsPing("33310115");
                            }
                        <<<<<<<
                            HEAD
                        } else if (this.defaultGoodsCode == 'GDS110010004') {
                        ======
                            =
                        } else if (this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') {
                        >>>>>>>
                            release
                            shan.tools.statisticsPing("333201151");
                            if (this.isLogin == 1) {
                                shan.tools.statisticsPing("33320115");
                            }
                        }
                        if (!this.checkOrder()) {
                            return;
                        }

                        // 登录 没有使用券 但是持有券 第一次下单
                        if (this.isLogin == 1 && !this.isUseTicket && this.isHasTicket && this.isFirstOrder) {
                        <<<<<<<
                            HEAD
                            if (this.defaultGoodsCode == 'GDS110010003') {
                                shan.tools.statisticsPing("333101152");
                            } else if (this.defaultGoodsCode == 'GDS110010004') {
                            ======
                                =
                                if (this.defaultGoodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                                    shan.tools.statisticsPing("333101152");
                                } else if (this.defaultGoodsCode == 'GDS110010004' || this.defaultGoodsCode == 'GDS349557890') {
                                >>>>>>>
                                    release
                                    shan.tools.statisticsPing("333201152");
                                }
                                this.isFirstOrder = false;
                                this.isNeedConfirm = true; //选择券后立即下单
                                this.getTicketInfo();
                                ticketListDialog.show();
                                return;
                            }

                            //决定testVersion
                            this.getTestVersion();


                            this.isApiLoading = true;

                            if (this.goodsCode == 'GDS110010003' || this.defaultGoodsCode == 'GDS905135589') {
                                if ($('#needCustomization').prop('checked')) {
                                    this.needServiceCustomization = 1;
                                }
                                else {
                                    this.needServiceCustomization = 0;
                                }
                            }


                            if (this.insuPrice > 0) { //选了保险走新接口
                                if (g_source == 1) {
                                    shan.tools.statisticsPing("370521");
                                } else {
                                    shan.tools.statisticsPing("370509");
                                }
                                this.postData = {
                                    contactPhone: this.contactPhone,
                                    goodsCode: this.goodsCode,
                                    goodsCodeStr: this.goodsCode + ',' + this.insuranceGoodsCode,
                                    couponIds: this.couponIds,
                                    insuPrice: this.insuPrice   //传保险价格用来判断是否走新接口
                                }
                            } else {
                                let _goodsCode = [];
                                for (let elem of
                                    this.goodsChosedList.values()
                                    ) {
                                    _goodsCode.push(elem.goodsCode);
                                }
                                this.postData = { //没选保险，一切照旧
                                    goodsCode: _goodsCode.join(','),
                                    couponIds: this.couponIds.join(','),
                                    isFirstOrder: this.isFirstOrder,
                                    contactPhone: this.contactPhone,
                                    phoneVerifyCode: this.phoneVerifyCode,
                                    serviceCodes: this.serviceCode,
                                    testVersion: this.testVersion,
                                    orderFrom: this.orderFrom,
                                    needServiceCustomization: this.needServiceCustomization,
                                    defaultGoodsCode: this.defaultGoodsCode,
                                    goodsNum: _num
                                }
                            }
                            shan.ajax({
                                url: '/sz/order/multconfirmport_async',
                                data: this.postData,
                                type: 'post',
                                success: function (_json) {

                                    order.isApiLoading = false;
                                    order.isFirstOrder = false;
                                    if (_json.SZ_HEAD.RESP_CODE != 'S0000') {
                                        //登录状态:改变文字/手机号变灰
                                        if (_json.SZ_HEAD.RESP_CODE == 1) { //没有券
                                            order.isLogin = 1;
                                            order.useTiket = false;
                                            $('#exchangeInfo').html('抵扣券可在' + order.contactPhone + '的个人中心查看');
                                            exchangeCouponDialog.show();

                                        }
                                        else if (_json.SZ_HEAD.RESP_CODE == 2) { //有卷
                                            //展示兑换券列表

                                            order.isLogin = 1;
                                            order.useTiket = true;
                                            order.getTicketInfo();
                                            ticketListDialog.show();
                                            order.isNeedConfirm = true;
                                        }
                                        else if (_json.SZ_HEAD.RESP_CODE == 3) { //免费套餐没有使用卷
                                            pop.alert("此套餐为活动体验套餐，请输入善诊口令或使用口令券");
                                            return false;
                                        }
                                        else if (_json.SZ_HEAD.RESP_CODE == "B502") {
                                            pop.message.show("下单已成功，请勿重复下单");
                                        }
                                        else {
                                            pop.message.show(_json.SZ_HEAD.RESP_MSG);
                                        }

                                    } else {
                                        if (_json.SZ_BODY.price) {
                                            window.location.replace('/sz/order/pay_exam_insu?cartBatchCode=' + _json.SZ_BODY.cartBatchCode + "&orderFrom=" + order.orderFrom);
                                        }

                                    }

                                }
                            });
                            return false;
                        }
                    ,
                        getTestVersion: function () {
                            if (g_source == 2) {
                                this.testVersion = 2;
                            } else if (g_source == 1) {
                                this.testVersion = 1;
                            } else {
                                this.testVersion = 0;
                            }

                            this.testVersion += "_" + this.orderFrom;
                        }
                    ,
                        getTicketInfo: function () {
                            shan.ajax({
                                data: {
                                    url: '/coupon/sorted_coupon_list.htm',
                                    goodsCode: this.defaultGoodsCode,
                                    goodsNum: _num
                                },
                                success: function (_json) {

                                    if (_json.SZ_HEAD.RESP_CODE != 'S0000') {
                                        pop.alert(_json.SZ_HEAD.RESP_MSG);
                                    }
                                    else {
                                        if (_json.SZ_BODY.COUPON_COUNT == 0) { //没有兑换券
                                            order.isHasTicket = false;
                                            if (typeof _json.SZ_BODY.COUPON_LIST != 'undefined' && _json.SZ_BODY.COUPON_LIST.length > 0) {
                                                order.renderTicket(_json.SZ_BODY.COUPON_LIST, ticketListDialog);
                                            }
                                            else {
                                                pop.message.show('好可惜，无适用的券');
                                            }
                                        }
                                        else { //有兑换券
                                            order.isHasTicket = true;
                                            order.renderTicket(_json.SZ_BODY.COUPON_LIST, ticketListDialog);
                                        }

                                    }
                                }
                            });
                        }
                    ,
                        renderTicket: function (list, layer) {

                            //if (this.isUseTicket) {
                            //list.chooseTicketCode = this.couponIds[0];
                            list.chooseTicketCode = this.couponIds;

                            //}

                            if (list.length > 0) {
                                layer.ele.find('.haveSzCode').hide();
                            }

                            layer.ele.find('.red-packet-ticket-list').html("").html($('#dmyTicketList').tmpl(list, {
                                getInput: function (spr) {

                                    if (list.chooseTicketCode.length > 0 && list.chooseTicketCode.includes(this.data.id + '')) {
                                        return '<input type="checkbox" disabled name="project13" checked="checked"/>';
                                    } else {
                                        return '<input type="checkbox" disabled name="project13" />';
                                    }
                                },
                                isFree: function () {
                                    if (order.activityPrice == 0) {
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                }
                            }));

                            //选择口令券
                            layer.ele.off('click').on('click', 'li', function () {
                                if (!$(this).hasClass('text-disabled')) {
                                    if ($(this).find('input[type="checkbox"]').prop('checked')) {
                                        $(this).find('input[type="checkbox"]').prop('checked', false);

                                        order.couponIds = order.couponIds.filter(x => {
                                            return x != $(this).data('code');
                                        })
                                        ;

                                        order.ticketAmt -= parseInt($(this).data('price'));
                                        order.isHasTicket = true;
                                        if (order.couponIds.length == 0) {
                                            order.ticketStatus = false;
                                        } else {
                                            order.ticketStatus = true;
                                        }


                                    }
                                    else {
                                        if (order.isUseTicket && order.couponIds.length >= _num) {

                                            var _id = order.couponIds.shift();

                                            $(this).siblings().each(function () {
                                                if ($(this).data('code') == _id) {
                                                    $(this).find('input[type="checkbox"]').prop('checked', false);
                                                    order.ticketAmt -= parseInt($(this).data('price'));
                                                }
                                            })
                                        }

                                        $(this).find('input[type="checkbox"]').prop('checked', true);
                                        order.couponIds.push($(this).data('code') + '');

                                        order.ticketAmt += parseInt($(this).data('price'));
                                        order.ticketStatus = true;

                                    }
                                    order.countPrice();
                                }
                            });

                        }
                    ,
                        countPrice: function () {
                            var actualPrice = 0;
                            if (this.isUseTicket) {//使用卷
                                if (this.insuPrice > 0) { //选了保险
                                    actualPrice = this.originPrice + this.servicePrice + this.addedPrice + this.insuPrice - this.ticketAmt;
                                } else {
                                    actualPrice = this.originPrice + this.servicePrice + this.addedPrice - this.ticketAmt;
                                }
                            }
                            else {  //没用券
                                if (this.insuPrice > 0) { //选了保险
                                    actualPrice = this.activityPrice + this.servicePrice + this.addedPrice + this.insuPrice;
                                } else {
                                    actualPrice = this.activityPrice + this.servicePrice + this.addedPrice;
                                }

                            }

                            this.actualPrice = actualPrice >= 0 ? actualPrice : 0;
                            this.actualOrgPrice = this.originPrice + this.servicePrice + this.addedPrice + this.insuPrice;
                        }
                    ,
                        syncChannelCode: function (channelCode, activityCode) {
                            shan.ajax({
                                url: '/sz/cooperate/syncChannel',
                                data: {
                                    key: g_key,
                                    channelCode: channelCode,
                                    activityCode: activityCode
                                },
                                success: function (_json) {
                                    if (_json && _json.SZ_HEAD && _json.SZ_HEAD.RESP_CODE == "S0000") {
                                        g_key = _json.SZ_BODY.DATA;

                                        //分享获券
                                        share.wxShare({
                                            key: g_key,
                                            success: function (copy) {
                                                share.shareSuccessCallback({
                                                    key: g_key,
                                                    channelCode: channelCode,
                                                    activityCode: activityCode,
                                                    GAIN_SUCC: function (list) {
                                                        share.inviteSuccessDialog.ele.find('.btn-list a:first-child').attr('href', copy.activityUrl);
                                                        share.inviteSuccessDialog.show(list);
                                                    }
                                                });
                                                exchangeCouponDialog.hide();
                                                share.shareTipsLayer.hide();
                                                shan.tools.statisticsPing("52002", {sourceCode: g_key});
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    ,
                        //孝心套餐获取城市列表
                        getCityList: function () {
                            cityinstit.run({
                                goodsCode: this.goodsCode,
                                onChoose: function () {
                                    //do nothing
                                }
                            });
                        }
                    }
                }
            );

    var run = function () {
        f.init();
    };

//初始化函数
    exports.run = run;
})
;


