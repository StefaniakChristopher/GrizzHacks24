import "./TreeInfo.css";

function TreeInfo() {
  return (
    <section className="tree-info">
      <div>
        <img src="/mrOakland2.jpg" />
      </div>
      <div>
        <h4>Select Track at Top to get Started</h4>
        <ul>
          <li>
            Dotted line represents either or: In this scenario either "Design
            and Analysis of Algorithims" or "Computer Organization" is required
            for "Senior Capstone"
          </li>
          <li>
            Bolded boxes represent{" "}
            <a href="https://docs.google.com/document/d/15ozLyxSBAJdNm5_gtqdAGfNOltPVPU9qJc9_cr9FBtw/edit">
              professional subjects
            </a>
            , which can only be taken after certain requirements have been met
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TreeInfo;
