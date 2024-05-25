fetch(this.url)
  .then((response) => response.json())
  .then((data) => {
    let db = data.output;
  });

class DashBoard {
  constructor(totalLead, todayLeads, MonthLeads, line, bar, donout, polar) {
    this.totalLead = totalLead;
    this.todayLeads = todayLeads;
    this.MonthLeads = MonthLeads;
    this.line = line;
    this.bar = bar;
    this.donout = donout;
    this.polar = polar;
  }
}
