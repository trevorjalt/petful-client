import React, {Component} from 'react'
import PetService from '../pet-service'
import './Adopt.css'

export default class Adopt extends Component {
    state = {
        cat: {},
        dog: {},
        loading: false,
        people: [],
        name: '',
        adopter: '',
        upForAdoption: '',
        previousAdopter: '',
        adoptionsInProcess: false,
        adopted: null,
        adoptedPet: {},
    }

    componentDidMount() {
        this.setState({ loading: true })

        PetService.getCat()
            .then(cat =>
                this.setState({ cat: cat })
        )
    
        PetService.getDog()
            .then(dog =>
                this.setState({ dog: dog })
        )

        PetService.getPeople()
            .then(person =>
                this.setState({ people: person })
        )
    }

    handleAddName = e => {
        e.preventDefault()

        e.target.value = ''

        let name = this.state.name

        this.setState ({ adopted: false })

        PetService.addPerson(name)
            .then(person => this.setState({ 
                people: person,
                adopter: name,
                name: ''
            }))

        let type = ''

        this.timeout = setInterval(() => {
            let randomPet = Math.floor(Math.random() * 2)
            if (randomPet === 0) {
                type = 'dogs'
            } else {
                type = 'cats'
            }

            if (type === 'dogs') {
                this.setState({ 
                    upForAdoption: this.state.dog.name,
                    previousAdopter: this.state.people[0],
                    adoptionsInProcess: true
                })
                PetService.deleteDog()
                    .then(res => {
                        PetService.getDog()
                            .then(dog => {
                                this.setState({ dog: dog })
                            })
                            .catch(error => {
                                console.error({ error })
                            })
                        PetService.getPeople()
                            .then(people => {
                                this.setState({ people: people})
                            })
                            .catch(error => {
                                console.error({ error })
                            })       
                })
            }

            if (type === 'cats') {
                this.setState({ 
                    upForAdoption: this.state.cat.name,
                    previousAdopter: this.state.people[0],
                    adoptionsInProcess: true
                })
                PetService.deleteCat()
                    .then(res => {
                        PetService.getCat()
                            .then(cat => {
                                this.setState({ cat: cat })
                            })
                            .catch(error => {
                                console.error({ error })
                            })
                        PetService.getPeople()
                            .then(people => {
                                this.setState({ people: people})
                            })
                            .catch(error => {
                                console.error({ error })
                            })       
                })
            }
        }, 5000)
    }

    handleAddPeopleToQueue() {
        let addPeople = setTimeout(() => {
            if (this.state.people === 5) {
                clearTimeout(addPeople)
            }
    
            const futureAdopters = [
                'Major Samantha Carter',
                'Teal\'c',
                'Dr. Daniel Jackson',
                'Colonel Jack O\'Neill',
                'Major General George Hammond',
                'Sgt. Walter Harriman',
                'Lt. Colonel Cameron Mitchell',
                'Vala Mal Doran',
                'Jonas Quinn',
                'Master Bra\'tac',
                'Selmak',
                'Lt. Colonel John Sheppard',
                'Teyla Emmagan',
                'Dr. Rodney McKay',
                'Ronon Dex',
                'Dr. Elizabeth Weir',
                'Richard Woolsey',
                'Thor',
                'Freyr',
                'Penegal',
            ]
    
            const randomAdopter = futureAdopters[Math.floor(Math.random() * futureAdopters.length)]
    
            if (this.state.people.length < 5) {
                PetService.addPerson(randomAdopter)
                .then(person => {
                    this.setState({ people: person })
                })
                .catch(error => {
                    console.error({ error })
                })
            }
        }, 5000)
    }


    handleAdoption = (type) => {
        if (type === 'cats') {
            this.setState({ 
                adopted: true,
                adopter: '',
                adoptedPet: this.state.cat,
                adoptionsInProcess: false,
            })
            PetService.deleteCat()
                .then(res => {
                    PetService.getCat()
                        .then(cat => {
                            this.setState({ cat: cat })
                        })
                        .catch(error => {
                            console.error({ error })
                        })
                    PetService.getPeople()
                        .then(people => {
                            this.setState({ people: people})
                        })
                        .catch(error => {
                            console.error({ error })
                        })       
            })
        }

        if (type === 'dogs') {
            this.setState({ 
                adopted: true,
                adopter: '',
                adoptedPet: this.state.dog,
                adoptionsInProcess: false
            })
            PetService.deleteDog()
                .then(res => {
                    PetService.getDog()
                        .then(dog => {
                            this.setState({ dog: dog })
                        })
                        .catch(error => {
                            console.error({ error })
                        })
                    PetService.getPeople()
                        .then(people => {
                            this.setState({ people: people})
                        })
                        .catch(error => {
                            console.error({ error })
                        })       
            })
        }
    }


    onInputName = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    renderAddNameForm = () => {
        return (
            <form className='get-in-queue'>
                <label htmlFor='name'>
                    Add Your Name To Get In Line:
                </label>
                <input 
                    required
                    type='text' 
                    name='name' 
                    id='name-input'
                    onInput={e => this.onInputName(e)}
                    value={this.state.name}
                />
                <button
                    onClick={this.handleAddName}
                    disabled={!this.state.name}
                >
                    Add Name
                </button>
            </form>
        )
    }


    renderCat = () => {
        let { cat } = this.state
        console.log(cat)
        return (
            <section>
                {this.state.people[0] === this.state.adopter
                    ? <button className='adopt-button' onClick={(e) => this.handleAdoption('cats')}>Adopt</button>
                    : ''}
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
                {this.state.people[0] === this.state.adopter
                    ? <button className='adopt-button' onClick={(e) => this.handleAdoption('dogs')}>Adopt</button>
                    : ''}
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
        if (this.state.people[0] === this.state.adopter) {
            this.handleAddPeopleToQueue()
            clearInterval(this.timeout)
        }
        return (
            <div className='adopt'>
                <div className='adopt__content'>
                    {!this.state.adoptionsInProcess && !this.state.adopted
                        ? <h2>Enter your name in the Queue to get started!</h2>
                        : ''}
                    {this.state.adoptionsInProcess
                        ? <h2>{this.state.previousAdopter} adopted {this.state.upForAdoption}!</h2>
                        : ''}
                    {this.state.adopted
                        ? <div className='congratulations'>
                            <h2>Congrats! You adopted {this.state.adoptedPet.name}</h2>
                            <img src={this.state.adoptedPet.imageURL} alt={this.state.adoptedPet.description} className='circular-landscape'/>
                        </div>
                        : ''}
                    <div className='up-for-adoption'>
                        <div className='queue-item queue-cat'>
                            {this.renderCat()}
                        </div>
                        <div className='queue-item queue-dog'>
                            {this.renderDog()}
                        </div>
                        <div className='queue-item queue-people'>
                            <div className='next-in-line'>
                                <h3>Next In Line</h3>
                            </div>
                            <div className='people-in-queue'>
                                {this.renderPeople()}
                            </div>
                            {this.renderAddNameForm()}
                            {this.state.people[0] === this.state.adopter
                                ? <span className='first-in-line'>It's your turn to adopt!</span>
                                : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}
