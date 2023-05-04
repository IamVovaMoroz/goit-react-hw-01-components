
import React from 'react';
import PropTypes from 'prop-types';
import {SectionStatistics, TitleStatistics, ListStatistics, ItemStatistics, Label} from "./Statistics.styled.jsx"

const Statistics = ({ data, title }) =>  {
    return (

<SectionStatistics className="statistics" >
    {/* Если  title есть, то рендерится то что справа, если нет, то ничего*/}
{title && <TitleStatistics className="title">{title}</TitleStatistics>}

  <ListStatistics className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <ItemStatistics className="item" key={id}>
            {/* через тернарник задаём цвета в зависимости от названия в файле */}
            <Label className="label" style={{ backgroundColor: label === 'docx' ? 'red' : label === '.pdf' ? 'blue' : label === '.mp3' ? 'green' : label === '.psd' ? 'purple' : 'black', color: 'gray' }}>{label}</Label>

            <span className="percentage"> {percentage}%</span>
          </ItemStatistics>
        ))}
      </ListStatistics>
</SectionStatistics>
  );
}

export default Statistics;


Statistics.propTypes = {

  title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      )
    

  }




