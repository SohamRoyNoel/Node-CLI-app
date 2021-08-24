const program = require("commander");
const { prompt } = require("inquirer");
const { importDataFromCSV } = require("../index");
const csv = require("csvtojson");
const cliProgress = require("cli-progress");
const ora = require("ora");

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

program
  .command("import <_filepath>")
  .alias("i")
  .description("Import data from CSV to DB")
  .action((_filepath) => {
    const spinner = ora("Fueling the rocket");
    spinner.start();
    (spinner.color = "green"), (spinner.text = "Converted CSV into JSON");
    csv()
      .fromFile(_filepath)
      .then(async (jsonObj) => {
        (spinner.color = "yellow"), (spinner.text = "Converted CSV into JSON");
        await importDataFromCSV(jsonObj).then((e) => {
          (spinner.color = "blue"), (spinner.text = "Data imported to DB");
          spinner.succeed('Done');
          process.exit(1);
        });
      });
      
  });

program.parse(process.argv);
