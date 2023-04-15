import React from "react";
import { Button, Checkbox, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import { ExerciseInterface, RecordInterface } from "../../interfaces";

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

interface Props {
  onDeleteRecord: (RecordId: string) => void;
  record: RecordInterface;
}

export default function RecordMenu(
  {
    record, onDeleteRecord,
  }: Props,
) {
  const handleDelete = (recordId: string) => {
    onDeleteRecord(recordId);
  };

  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [left, setLeft] = React.useState<readonly number[]>([0, 1]);
  const [right, setRight] = React.useState<readonly number[]>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (exercises: readonly any[]) => (
    <Paper sx={{ width: 205, height: 230, overflow: 'auto' }}>
      <List dense component="div" role="list">
        {exercises.map((value: any) => {
          const labelId = `transfer-list-item-${value.exerciseId}-label`;

          return (
            <ListItem
              key={value}
              style={{ padding: 0, margin: 0 }}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  style={{ padding: 0, marginLeft: 5 }}
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText style={{ padding: 0, margin: 0 }}
                id={labelId} primary={`Ex ${value}`} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );


  return (
    <div className="mb-10">
      <div className="flex flex-row justify-between mb-5">
        <div>
          <Typography variant="h5">
            {record.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {record.description}
          </Typography>
        </div>
        <div>
          <Button variant="outlined" onClick={() => handleDelete(record.recordId || "")}>X</Button>
        </div>
      </div>
      <Grid container spacing={2} justifyContent="left" alignItems="center">
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label="move all right"
            >
              ≫
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label="move all left"
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>
      </Grid>
    </div>
  );
}
