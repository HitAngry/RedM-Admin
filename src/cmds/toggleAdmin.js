let display = false;

RegisterCommand('admin', async (source, args) => {
  setDisplayMenuAdmin();
});

RegisterNuiCallbackType("quitMenu");
on("__cfx_nui:quitMenu", (data, cb) => {
  handleNuiFocus();
});