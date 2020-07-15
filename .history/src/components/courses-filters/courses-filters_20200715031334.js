import React, { Component } from 'react';

export default class CoursesFilters extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeSelected: 'RUB',
        }
    }

    onChange = (type) => {
        this.props.changePrice(type);
        this.setState({
            activeSelected : type
        });
    };

    onSearchChange = (e) => {
        this.props.changeFilterSearch(e.target.value)
    };

    render() {
        const { subjects, genres, grades } = this.props; 

        return(
            <div className="courses-filters">
                <form>
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <select className="form-control" id="subject" name="subject" 
                                        onChange={(e) => this.props.onFilterChange(e.target.name, e.target.value)} 
                                        defaultValue={'DEFAULT'}>

                                    <option value="DEFAULT">Все предметы</option>
                                    {subjects.map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-group">
                                <select className="form-control" id="genre" name="genre" 
                                onChange={(e) => this.props.onFilterChange(e.target.name, e.target.value)} 
                                defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT">Все жанры</option>
                                    {genres.map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-group">
                                <select className="form-control" id="grade" name="grade" 
                                onChange={(e) => this.props.onFilterChange(e.target.name, e.target.value)}
                                defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT">Все классы</option>
                                    {grades.map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Поиск" id="search" name="search" onChange={(e) => this.onSearchChange(e)} />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="dropdown">
                                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Цена
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <div className={this.state.activeSelected === 'RUB' ? 'dropdown-item active' : 'dropdown-item'} onClick={() => this.onChange('RUB')}>Рубли</div>
                                    <div className={this.state.activeSelected === 'BONUS' ? 'dropdown-item active' : 'dropdown-item'} onClick={() => this.onChange('BONUS')}>Бонусы</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}