import React, { Component } from 'react';

export default class CoursesFilters extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { subjects, genres } = this.props; 

        return(
            <div className="courses u-mt-30">
                <form className="courses-form form" id="filterform">
                    <div>
                        <select id="subj" name="subj" onChange={(e) => this.props.onSubjectChange(e.target.value)} defaultValue={'DEFAULT'}>
                            <option value="DEFAULT">Все предметы</option>
                            {subjects.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select id="genre" name="genre" defaultValue={'DEFAULT'}>
                            <option value="DEFAULT">Все жанры</option>
                            {genres.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    {/* 
                    <div>
                        <select id="grade" name="grade">
                            <option>Все классы</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option selected="">11</option>
                        </select>
                    </div> */}
                    <div>
                        <input className="borderFind" type="text" placeholder="Поиск" id="search" name="search" />
                        <button className="courses-form-search-btn" type="submit" title="Найти"></button>
                    </div>
                </form>
            </div>
        )
    }
}