import { BottomContents } from './bottomContent-styled';

const BottomContent = ({ movies, credit }) => {
  return (
    <BottomContents>
      <ul>
        <li>
          <span>개봉</span>
          {movies.release_date}
        </li>
        <li>
          <span>장르</span>
          {movies.genres.map(({ name }) => name + ' ')}
        </li>
        <li>
          <span>출연</span>
          {credit.map(({ name }, idx) => {
            if (idx === credit.length - 1) return name;
            return name + ', ';
          })}
        </li>
        {movies.budget > 0 && (
          <li>
            <span>제작비</span>
            {movies.budget.toLocaleString('ko-KR')}
          </li>
        )}
        {movies.revenue > 0 && (
          <li>
            <span>수익</span>
            {movies.revenue.toLocaleString('ko-KR')}
          </li>
        )}
      </ul>
    </BottomContents>
  );
};

export default BottomContent;
