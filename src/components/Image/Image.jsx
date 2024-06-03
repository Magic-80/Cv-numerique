// eslint-disable-next-line react/prop-types
function Image({className , src , alt})
{
    return (
        <img className={className} src={src} alt={alt} />
    )
}

export default Image