import React, { Component } from 'react';

export default class CoursesFilters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            genre: '',
            grade: ''
        };
    }


    onFilterChange = (type, term) => {
        switch(type) {
            case 'subject':       
                this.setState({
                    subject: term,
                });
                break;
          
            case 'genre': 
                this.setState({
                    genre: term,
                });
                break;

            case 'grade':
                this.setState({
                    grade: term
                });
                break;
          
            default:
                this.setState({
                    subject: '',
                    genre: '',
                    grade: ''
                });
                break;
        }
    };

    render() {
        const { subjects, genres, grades } = this.props; 

        return(
            <div className="courses u-mt-30">
                <form className="courses-form form" id="filterform">
                    <div>
                        {/* <select id="subj" name="subj" onChange={(e) => this.props.onSubjectChange(e.target.value)} defaultValue={'DEFAULT'}> */}
                        <select id="subj" name="subj" 
                        onChange={(e) => this.props.onSubjectChange(e.target.value)} 
                        defaultValue={'DEFAULT'}>
                            <option value="DEFAULT">Все предметы</option>
                            {subjects.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select id="genre" name="genre" 
                        onChange={(e) => this.onFilterChange('genre', e.target.value)} 
                        defaultValue={'DEFAULT'}>
                            <option value="DEFAULT">Все жанры</option>
                            {genres.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select id="grade" name="grade" 
                        onChange={(e) => this.onFilterChange('grade', e.target.value)} 
                        defaultValue={'DEFAULT'}>
                            <option value="DEFAULT">Все классы</option>
                            {grades.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input className="borderFind" type="text" placeholder="Поиск" id="search" name="search" />
                        <button className="courses-form-search-btn" type="submit" title="Найти"></button>
                    </div>
                </form>
            </div>
        )
    }
}