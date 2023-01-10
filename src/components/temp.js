<div className={gridContainer}>
{chordArray.map((chord) =>
  <div className={gridItem} key={chord.toString()} value={chord}>
    {chord}
  </div>
)}
</div>