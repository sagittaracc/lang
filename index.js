const { lang, object, subject } = require('./src/lang')

// This is how a language works
// We've got an object, a subject and an action
// Here is a regular sentence structure: An object is doing an action towards a subject

// Object
const me = (name, age) => {
    let props = {
        name,
        age
    }

    return object(props)
}

// Subject
const friend = (name, age) => {
    let props = {
        name,
        age
    }

    return subject(props)
}

// Action
const say = text => {
    return (me, friend) => {
        if (text === 'fuck' && friend.age < 18) {
            console.log(`Watch your mouth, ${me.name}! ${friend.name} is underage!`)
            return
        }
        
        console.log(`${me.name} says ${text} to ${friend.name}`)
    }
}

const Yuriy = me('Yuriy', 34)
const Nikita = friend('Nikita', 24)

// Object "Yuriy" says something to a subject "Nikita"
// You cannot use curse words if your friend is underage
lang(Yuriy, say('fuck'), Nikita)