console.log(degree(9, 4))
const CATEGORY = 'category';
const PRODUCT = 'product';
const menu = [
    {
        type: CATEGORY,
        name: 'Mac',
        menu: [
            {
                type: PRODUCT,
                name: 'MacBook Pro 16”',
            },
            {
                type: PRODUCT,
                name: 'iMac 24”',
            },
            {
                type: PRODUCT,
                name: 'iMac 27”',
            },
            {
                type: CATEGORY,
                name: 'Accessories',
                menu: [
                    {
                        type: CATEGORY,
                        name: 'Featured Magic',
                        menu: [
                            {
                                type: PRODUCT,
                                name: 'Magic Keyboard',
                            },
                            {
                                type: PRODUCT,
                                name: 'Magic Trackpad',
                            },
                        ],
                    },
                    {
                        type: CATEGORY,
                        name: 'Audio',
                        menu: [
                            {
                                type: PRODUCT,
                                name: 'AirPods Pro',
                            },
                            {
                                type: PRODUCT,
                                name: 'AirPods Max',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: CATEGORY,
        name: 'Ipad',
        menu: [
            {
                type: PRODUCT,
                name: 'iPad Pro 11”',
            },
            {
                type: PRODUCT,
                name: 'iPad Pro 12.9”',
            },
            {
                type: CATEGORY,
                name: 'Accessories',
                menu: [
                    {
                        type: PRODUCT,
                        name: 'Apple Pencil',
                    },
                    {
                        type: PRODUCT,
                        name: 'Smart Keyboard',
                    },
                ],
            },
        ],
    },
    {
        type: CATEGORY,
        name: 'Empty Category',
        menu: [],
    },
]

const SPACE = ' '
function printMenu(menu, level = 0){
    let res = ''
    for (const element_of_menu of menu){
        level++
        for (const element_of_array in element_of_menu) {
            if (element_of_menu[element_of_array] === CATEGORY){
                res = res + '\n' + element_of_menu.name + printMenu(element_of_menu.menu)
            }
            else { if (element_of_menu[element_of_array] === PRODUCT){
                res = sum(SPACE, level) +  res + '\n' + '- ' + element_of_menu.name
                }
            }
        }
    }
    return res
}
console.log(printMenu(menu))

function sum(space, level){
    if (level === 0) {
        return space
    }
    return space + sum(space, level - 1)
}


function degree(n, x){
    if (x === 1) {
        return n
    }
    return n * degree(n, x - 1)
}