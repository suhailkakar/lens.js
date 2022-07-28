import { Lens } from '.';

Lens.FollowUser(
  '0x01',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4MEI3NUI3ZjU4NTkzNzg5RDlmODQ1NUUwZjEwYjQxNzAyYTdiODcwYSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NTkwMDg5MzcsImV4cCI6MTY1OTAxMDczN30.QmErrNzaoctSL5pDJkn3VLpAcn9P8Y0Y_glXB9FL1ts'
).then((data) => {
  console.log(data);
});
