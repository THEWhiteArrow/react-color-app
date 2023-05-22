import React, { Component } from 'react'
import { ChromePicker } from 'react-color';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


export default class DrawerPaletteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'purple',
            newName: '',
        }
    }
    updateColor = (color) => this.setState({ color: color.hex })
    addNewColor = () => this.props.addNewColor(this.state.color, this.state.newName)
    handleChange = (evt) => this.setState({ newName: evt.target.value })

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value => (

            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )

        ))
        ValidatorForm.addValidationRule('isColorUnique', value => (

            this.props.colors.every(
                ({ color }) => color.toLowerCase() !== this.state.color.toLowerCase()
            )

        ))
    }
    render() {
        return (
            <div>
                <Typography variant="h6">Design Your Palette</Typography>
                <Button variant='contained' color='secondary'>Clear Palette</Button>
                <Button variant='contained' color='primary'>Random Color</Button>
                <ChromePicker color={this.state.color} onChange={this.updateColor} />
                <ValidatorForm onSubmit={this.addNewColor}>
                    <TextValidator
                        value={this.state.newName}
                        onChange={this.handleChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['This field is reqired', 'The name is not unique', 'The color already exists']}
                    />
                    <Button type='submit' variant='contained' color='primary' style={{ transition: 'none', backgroundColor: this.state.color }} >Add Color</Button>
                </ValidatorForm>
            </div>
        )
    }
}
