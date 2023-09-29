const firstName = prompt('Напишите первое имя'),
    secondName = prompt('Напишите второе имя')

const result = (Math.floor(Math.random() * 100))


if (result < 30 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`совместимость имен ${firstName} и ${secondName} равна ${result} это очень низкая совместимость, попробуйте подобрать другое имя`)
} else if (result >= 30 && result < 60 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`совместимость имен ${firstName} и ${secondName} равна ${result} это хорошая совместимость, но может быть и лучше`)
} else if (result >= 60 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`совместимость имен ${firstName} и ${secondName} равна ${result} это идеальная совместимость, цените и берегите друг друга`)
} else {
    alert('Упс...попробуйте еще раз')
}




