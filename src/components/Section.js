import React from 'react'

const Section = props => {
    return (
        <div className={`section ${(props.full && "container-full") || ""} ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export const SectionTitle = props => {
    return (
        <div className={`section__title ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export const SectionFilter = props => {
    return (
        <div className="section__filter">
            {props.children}
        </div>
    )
}

export const SectionBody = props => {
    return (
        <div className={`section__body ${props.className || ""}`}>
            {props.children}
        </div>
    )
}
export const SectionFooter = props => {
    return (
        <div className="section__footer">
            {props.children}
        </div>
    )
}

export default Section
