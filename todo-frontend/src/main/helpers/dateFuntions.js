export default props => {
    var date = new Date(props)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}