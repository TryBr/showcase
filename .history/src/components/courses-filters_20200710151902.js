import React, { Component } from 'react';

export default class CoursesFilters extends Component {
    
    render() {   
     
        return(
            <div className="courses u-mt-30">
                <form className="courses-form form" id="filterform" role="form">
                    <div>
                        <select id="subj" name="subj">
                            <option>Все предметы</option>
                            <option>Алгебра</option>
                            <option>Английский язык</option>
                            <option>Биология</option>
                            <option>География</option>
                            <option>Геометрия</option>
                            <option>Демо-версия</option>
                            <option>Информатика</option>
                            <option>История</option>
                            <option>Литература</option>
                            <option>Математика</option>
                            <option>Обществознание</option>
                            <option>Окружающий мир</option>
                            <option>Робототехника</option>
                            <option>Русский язык</option>
                            <option>Физика</option>
                            <option>Химия</option>
                        </select>
                    </div>
                    <div>
                        <select id="genre" name="genre">
                            <option>Все жанры</option>
                                <option>Демо</option>
                                <option>Задачник</option>
                                <option>Подготовка к ВПР</option>
                                <option>Подготовка к ЕГЭ</option>
                                <option>Рабочая тетрадь</option>
                        </select>
                    </div>
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