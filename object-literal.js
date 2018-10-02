var myOffice = {
  branchInfo: {
    branch: "Scranton",
    state: "Pennsylvania"
  },

  getBranchInfo: function () {
    console.log ("This is " + this.branchInfo.branch + ", " + this.branchInfo.state + ".");
  },

  updateBranchInfo : function (branchInfo) {
    if (typeof branchInfo === "object") {
      this.branchInfo = branchInfo;
    }
  }
};


myOffice.getBranchInfo ();
myOffice.updateBranchInfo ({
  branch: "Nashua",
  state: "New Hampshire"
});
myOffice.getBranchInfo ();

