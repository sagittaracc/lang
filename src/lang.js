const lang = (object, action, subject) => {
    object(action, subject)
}

const object = props => (action, subject) => action(props, subject)

const subject = props => props

module.exports = {
    lang,
    object,
    subject
}