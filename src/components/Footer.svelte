<footer class="footerWrap">
  <div class="footerTop">
    <div class="section">
      <a href="/" class="sectionName">Community</a>
      <a 
        target="_blank" 
        rel="noreferrer" 
        href="https://github.com/open-source-labs/Svelvet"
        >GitHub</a
      >
      <a 
        target="_blank" 
        rel="noreferrer" 
        href="https://www.linkedin.com/company/svelvet/"
        >LinkedIn</a
      >
      <a 
        target="_blank" 
        rel="noreferrer" 
        href="https://twitter.com/SvelvetOSLabs">Twitter</a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://stackoverflow.com/questions/tagged/svelvet"
        >Stack Overflow</a
      >
    </div>
  </div>
  <div class="footerBottom">
    <div style="font-size: 0.75rem;">
      &copy; 2023 Svelvet | <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/open-source-labs/Svelvet/blob/main/LICENSE"
        >MIT License</a
      >
    </div>
    <div style="font-size: 0.75rem;">
      Website designed by <a
        href="https://wendyhuynhdesign.com/"
        rel="noreferrer"
        target="_blank"
        style="color: #EC7489;">Wendy Huynh</a
      >
    </div>
  </div>
</footer>

<style>
  .footerWrap {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-top-width: 1px;
    font-size: 0.875rem;
  }
  .footerTop {
    display: none;     
    font-size: 0.875rem;
    padding: 1rem 4rem;
  }
  .footerBottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.25rem;
    color: #6b7280;
  }
  .section {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
    color: #4B5563;
  }
  .sectionName {
    font-weight: 600;
    color: #374151;
  }
  @media (min-width: 768px) {
    .footerWrap {
      display: block;
      flex-direction: column;
    }
    .footerTop {
      display: flex;
      justify-content: space-around;
    }     
  }
</style>
