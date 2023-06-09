import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css'
import { Link } from 'react-router-dom';
import chroma from 'chroma-js'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    xxx: {
        backgroundColor: 'green'
    }
})

export default (props) => <ColorBoxComponent {...props} classes={useStyles()} />

class ColorBoxComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { copied: false }
    }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }
    render() {
        const { name, background, moreUrl, showLink } = this.props
        const { copied } = this.state
        const isDarkColor = chroma(background).luminance() <= 0.08
        const isLightColor = chroma(background).luminance() >= 0.7
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>

                <div className='ColorBox' style={{ background }} >
                    <div style={{ background }} className={`copy-overlay ${copied ? 'show' : ''}`} />
                    <div className={`copy-msg ${copied ? 'show' : ''} ${isLightColor && 'dark-text'}`}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>

                    <div className='copy-container'>
                        <div className='box-content'>
                            <span className={`${isDarkColor && 'light-text'}`}>
                                {name}
                            </span>
                        </div>
                        <button className={`copy-btn ${isLightColor && ' dark-text'}`}>Copy</button>
                        {showLink && <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLightColor && 'dark-text'}`}>MORE</span>
                        </Link>}

                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}


