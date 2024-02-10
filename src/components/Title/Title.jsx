// eslint-disable-next-line react/prop-types
function Title({className , text , span})
{
    return (
        <>
            <p className={className}> {text} <span> {span} </span>  </p>
        </>
    )
}

export default Title