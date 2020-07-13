import React, { Component } from 'react';

export default class CoursesFilters extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeSelected: ''
        }
    }

    onChange = (type) => {
        this.props.changePrice(type);
        this.setState({
            activeSelected : type
        });
    };

    render() {
        const { subjects, genres, grades } = this.props; 

        return(
            <div className="courses-filters">
                <form>
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <select className="form-control" id="subj" name="subj" 
                                        onChange={(e) => this.props.changeFilterSubject(e.target.value)} 
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
                                onChange={(e) => this.props.changeFilterGenre(e.target.value)} 
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
                                onChange={(e) => this.props.changeFilterGrade(e.target.value)}
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
                                <input className="form-control" type="text" placeholder="Поиск" id="search" name="search" onChange={(e) => this.props.changeFilterSearch(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="dropdown">
                                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Цена
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <div className={'dropdown-item ' + this.state.activeSelected === 'RUB' ? 'active' : null} onClick={() => this.onChange('RUB')}>Рубли</div>
                                    <div className={'dropdown-item ' + this.state.activeSelected === 'BONUS' ? 'active' : null} onClick={() => this.onChange('BONUS')}>Бонусы</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}