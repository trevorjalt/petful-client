import React, {Component} from 'react'
import petServices from '../pet-services'
import PetServices from '../pet-services'
import './Adopt.css'

class Adopt extends Component {
    state = {
        cat: {},
        dog: {},
        name: '',
        petName: '',
        petType: 'cat',
        people: [],
        adopted: null,
        first: null,
        firstOut: null,
        timer: null
    }


    componentDidMount() {
        petServices.getCat()
            .then(cat =>
                this.setState({ cat: cat })
            )
        
        petServices.getDog()
            .then(dog =>
                this.setState({ dog: dog })
        )

        petServices.getPeople()
            .then(person =>
                this.setState({ people: person })
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.firstOut !== this.state.firstOut) {
            petServices.getCat()
                .then(cat =>
                    this.setState({ cat: cat })
                )

            petServices.getDog()
                .then(dog =>
                    this.setState({ dog: dog })
                )

            petServices.getPeople()
                .then(person =>
                    this.setState({ people: person })
                )
        }
    }


    handleAddName = e => {
        e.preventDefault()
        let name = this.state.name

        PetServices.addPerson(name)
            .then(people => this.setState({ people }))
        
        let timer = setInterval(() => {
            this.handleInterval()
        }, 1000)

        this.setState({ timer })
    }


    handleAdoption = e => {
        if (this.state.petType === 'cat') {
            PetServices.deleteCat(this.state.cat)
                .then(this.setState({
                    adopted: true, 
                    first: !this.state.first,
                    firstOut: !this.state.firstOut 
                }))  
        } else {
            PetServices.deleteDog(this.state.dog)
                .then(this.setState({
                    adopted: true, 
                    first: !this.state.first,
                    firstOut: !this.state.firstOut 
                }))  
        }
    }


    handleInterval = () => { 
        let fighterZ = [
            'Goku',
            'Vegeta',
            'Gohan',
            'Trunks'
        ]

        if (this.state.people.length > 1) {

            if (this.state.petType === 'cat') {
                PetServices.deleteCat()
                    .then(this.setState({ firstOut: !this.state.firstOut }))  
                       
            } else {
                PetServices.deleteDog()
                    .then(this.setState({ firstOut: !this.state.firstOut }))  
            }
        } else {
            this.setState({ first: true })
            clearInterval(this.state.timer)
            let i = 0

            setInterval(() => {
                PetServices.addPerson(fighterZ[i])
                .then(people => this.setState({ people }))
                i += 1
            }, 2000)}
    }


    onInputName = e => {
        this.setState({ name: e.target.value })
    }


    onPetTypeSelect = e => {
        this.setState({ petType: e.target.value })
    }


    renderCat = () => {
        let { cat } = this.state

        return (
            <section>
                <img src={cat.imageURL} alt={cat.description} />
                <ul>
                    <li>Name: {cat.name}</li>
                    <li>Age: {cat.age}</li>
                    <li>Breed: {cat.breed}</li>
                    <li>Gender: {cat.gender}</li>
                    <li>Description: {cat.description}</li>
                    <li>Story: {cat.story}</li>
                </ul>
            </section>
        )       
    }


    renderDog = () => {
        let { dog } = this.state

        return (
            <section>
                <img src={dog.imageURL} alt={dog.description} />
                <ul>
                    <li>Name: {dog.name}</li>
                    <li>Age: {dog.age}</li>
                    <li>Breed: {dog.breed}</li>
                    <li>Gender: {dog.gender}</li>
                    <li>Description: {dog.description}</li>
                    <li>Story: {dog.story}</li>
                </ul>
            </section>
        )       
    }


    renderPeople = () =>  {
        let people = this.state.people    
        
        if (people.length > 1) {
            return people.map((person, index) => (
                <div key={index}>{person}</div>
            ))
        }
        return (
            <div>{people[0]}</div>
        )
    }


    render() {
        return (
            <div className='adopt'>
                <div className='adopt__content'>
                    <h1>Adoptions</h1>
                    <h2>Up for adoption</h2>
                    {this.state.petType === 'cat'
                        ? this.renderCat()
                        : this.renderDog()}
                    {this.state.first ? (
                        <div>
                        <h3>Your Up! Click to Adopt!</h3>
                        <button
                            type='button'
                            onClick={this.handleAdoption}
                        >
                            Adopt
                        </button>
                        </div>)
                        : ''}
                    {this.state.adopted ? (
                        <div>
                            {this.state.petType === 'cat'
                                ? (<h3>Congrats you adopted {this.state.cat.name}!</h3>)
                                : (<h3>Congrats you adopted {this.state.dog.name}!</h3>)}
                        </div>
                    ) : ''}
                    {this.state.first 
                        ? ''
                        : (<h3>Next Person In Queue</h3>)}
                    {this.renderPeople()}
                    <h3>Select Your Pet</h3>
                    <select name='pet-type' defaultValue="cat" onChange={this.onPetTypeSelect}>
                        <option>Cat</option>
                        <option>Dog</option>
                    </select>
                    <h3>Get in the Queue</h3>
                    <label htmlFor='get-in-queue'>
                        Enter your name:
                    </label>
                    <input 
                        type='text' 
                        name='get-in-queue' 
                        id='get-inqueue'
                        required
                        onInput={this.onInputName.bind(this)}
                    />
                    <button
                        type='button'
                        onClick={this.handleAddName}
                    >
                        Add Name
                    </button>
                </div>
            </div>
        )
    }
    
}

export default Adopt