// import css from './Statistics.module.css';
export const Statistics = ({ stats }) => {
  console.log(stats);
  return (
    <div>
      <section class="statistics">
        <h2 class="title">Upload stats</h2>
        <ul class="stat-list">
          <li class="item">
            <span class="label">1</span>
            <span class="percentage">2</span>
          </li>
          <li class="item">
            <span class="label">1</span>
            <span class="percentage">2</span>
          </li>
          <li class="item">
            <span class="label">1</span>
            <span class="percentage">2</span>
          </li>
          <li class="item">
            <span class="label">1</span>
            <span class="percentage">2</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
