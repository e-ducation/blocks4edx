/*
// <problem> 最外层
Blockly.Blocks['problem'] = {
    init: function() {
      this.appendStatementInput("problem_input")
          // .setCheck(null)
          // .appendField(new Blockly.FieldImage("/media/chuanganqi/siri_input.png",40,40,"*"))
          .appendField("随机化题目")
          // .appendField(new Blockly.FieldDropdown([["单选题", "multiplechoiceresponse"], ["填空题", "numericalresponse"], ]), "problem_option");
      this.setColour(200);
      this.setTooltip('tip');
      this.setHelpUrl('https://www.eliteu.cn/');
    }
};
  
Blockly.Python['problem'] = function(block) {
    //let dropdown_problem_option = block.getFieldValue('problem_option');
    let statements_problem_input = Blockly.Python.statementToCode(block, 'problem_input');
    // TODO: Assemble Python into code variable.
    // var code = `def block_task_fun():\n${statements_task_statement}\ntask_thread.Task("${number_task_time}",block_task_fun).start()`;
    let code = `<problem>\n${statements_problem_input}\n</problem>`;
    return code;
};
*/

// python_script
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#k8f5dm
// 独立的python_script
Blockly.Blocks["python_script"] = {
  init: function() {
    this.appendStatementInput("python_script_statement")
      .setCheck(null)
      //.appendField(new Blockly.FieldNumber(17,0,24),"task_time");
      .appendField("python_script:");
    // .appendField(new Blockly.FieldTextInput("17:30"), "task_time")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("tip");
    this.setHelpUrl("HelpUrl");
  }
};

Blockly.Python["python_script"] = function(block) {
  // var number_task_time = block.getFieldValue('task_time');
  var statements_task_statement = Blockly.Python.statementToCode(
    block,
    "python_script_statement"
  );
  //纳入时间和任务
  //var code = `  <script type="loncapa/python">\n${statements_task_statement}\n  </script>`;
  var code = `${statements_task_statement}\n  </script>`;
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#c88cbt
Blockly.Blocks["problem"] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("python_script");
    this.appendStatementInput("python_script").setCheck(null);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("problem_text");
    this.appendStatementInput("problem_text").setCheck(null);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("response");
    this.appendStatementInput("response")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("solution");
    this.appendStatementInput("solution").setCheck(null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["problem"] = function(block) {
  var statements_python_script = Blockly.Python.statementToCode(
    block,
    "python_script"
  );
  var statements_problem_text = Blockly.Python.statementToCode(
    block,
    "problem_text"
  );
  var statements_response = Blockly.Python.statementToCode(block, "response");
  var statements_solution = Blockly.Python.statementToCode(block, "solution");
  // TODO: Assemble Python into code variable.
  // Blockly.Python.definitions_.import_turtle = `<problem>\n<script type="loncapa/python">\n`;
  let statements_python_script_remove_2_space = statements_python_script.replace(
    /^ {2}/gm,
    ""
  );
  // console.log(statements_python_script_remove_2_space);
  // for i in statements_python_script
  let statements_solution_code = `
<solution>
<div class="detailed-solution">
${statements_solution}
</div>
</solution>
`;
  var code = `${statements_python_script_remove_2_space}</script>\n${statements_problem_text}\n${statements_response}\n${statements_solution_code}\n</problem>`;
  return code;
};


// todo: html <>
// 建立文本从 拼接文本 还是使用标记 需要选一个 某些地方只能使用标记 求值运算
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jr7ckk
Blockly.Blocks["html_p"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("<p>")
      .appendField(new Blockly.FieldTextInput("hello world"), "p")
      .appendField("</p>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["html_p"] = function(block) {
  var text_p = block.getFieldValue("p");
  // TODO: Assemble Python into code variable.
  var code = `<p>${text_p}</p>`;
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#y2xano
Blockly.Blocks["multiplechoiceresponse"] = {
  init: function() {
    this.appendStatementInput("statement")
      .setCheck(null)
      .appendField("multiplechoiceresponse");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["multiplechoiceresponse"] = function(block) {
  var statements_statement = Blockly.Python.statementToCode(block, "statement");
  // TODO: Assemble Python into code variable.
  let code = `
  <multiplechoiceresponse>
  <choicegroup type="MultipleChoice" shuffle="true">
  ${statements_statement}
  </choicegroup>
</multiplechoiceresponse>
`;
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#duzd93
Blockly.Blocks["choice"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("choice")
      .appendField("correct:")
      .appendField(
        new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]),
        "correct"
      )
      .appendField("fixed:")
      .appendField(
        new Blockly.FieldDropdown([["false", "false"],["true", "true"]]),
        "fixed"
      )
    this.appendDummyInput()
      .appendField("text:")
      .appendField(new Blockly.FieldTextInput("default"), "text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["choice"] = function(block) {
  var dropdown_correct = block.getFieldValue("correct");
  var dropdown_fixed = block.getFieldValue("fixed");
  var text_text = block.getFieldValue("text");
  // TODO: Assemble Python into code variable.
  if(dropdown_fixed=="true"){
    var code = `<choice correct="${dropdown_correct}" fixed="${dropdown_fixed}">${text_text}</choice>\n`;
  }
  else{
    var code = `<choice correct="${dropdown_correct}">${text_text}</choice>\n`;
  }
  
  return code;
};

// numericalresponse
Blockly.Blocks["numericalresponse"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("numericalresponse ")
      .appendField("answer:")
      .appendField(new Blockly.FieldTextInput("$y"), "answer")
      .appendField("type:")
      .appendField(new Blockly.FieldTextInput("tolerance"), "type")
      .appendField("default:")
      .appendField(new Blockly.FieldTextInput("0.01%"), "default1")
      .appendField("textline_size:")
      .appendField(new Blockly.FieldTextInput("10"), "textline_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["numericalresponse"] = function(block) {
  var answer = block.getFieldValue("answer");
  var type = block.getFieldValue("type");
  var default1 = block.getFieldValue("default1");
  var textline_size = block.getFieldValue("textline_size");
  // TODO: Assemble Python into code variable.
  var code = `
<numericalresponse answer="${answer}">
    <responseparam type="${type}" default="${default1}" name="tol"
      description="Numerical Tolerance"/>
    <textline size="${textline_size}"/>
</numericalresponse>
`;
  return code;
};


// Blockly.Python["numericalresponse"] = function(block) {
Blockly.Blocks["elite_random_float"] = {
  init: function() {
    this.appendValueInput("from").setCheck("Number").appendField("random float from"),
    this.appendValueInput("to").setCheck("Number").appendField("to "),
    //this.appendDummyInput().appendField(""),
    this.setColour(230);
    this.setInputsInline(!0),
    this.setOutput(!0, null)
  }
}

Blockly.Python["elite_random_float"] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import random"
  let from = Blockly.Python.valueToCode(block,"from",Blockly.Python.ORDER_ATOMIC);
  let to = Blockly.Python.valueToCode(block,"to",Blockly.Python.ORDER_ATOMIC);
  code = `random.uniform(${from},${to})`
  return [code, Blockly.Python.ORDER_NONE];
}

////////////////////
// 格式化数字
// format(1234567, ',d')  // 接受输入，并且输出
// https://stackoverflow.com/questions/1823058/how-to-print-number-with-commas-as-thousands-separators

Blockly.Blocks["thousands_separator"] = {
  init: function() {
    this.appendValueInput("number")
      .setCheck("Number")
      .appendField("thousands separator");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["thousands_separator"] = function(block) {
  var value_number = Blockly.Python.valueToCode(
    block,
    "number",
    Blockly.Python.ORDER_ATOMIC
  );
  // var code = `format(${value_number}, ',d')`;
  // var code = `"{0:,.0f}".format()`;
  var code = `format(float(${value_number}), ',')`;
  
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks["percent_sign"] = {
  init: function() {
    this.appendValueInput("number")
      .setCheck("Number")
      .appendField("number to x%");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["percent_sign"] = function(block) {
  var value_number = Blockly.Python.valueToCode(
    block,
    "number",
    Blockly.Python.ORDER_ATOMIC
  );
  // var code = `format(${value_number}, ',d')`;
  var code = `"{}%".format(float(${value_number})*100)`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["fraction"] = {
  init: function() {
    this.appendValueInput("number")
      .setCheck("Number")
      .appendField("fraction(string)");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["fraction"] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import fractions"
  var value_number = Blockly.Python.valueToCode(
    block,
    "number",
    Blockly.Python.ORDER_ATOMIC
  );
  // var code = `format(${value_number}, ',d')`;
  // 
  var code = `str(fractions.Fraction(*float(${value_number}).as_integer_ratio()))`;
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks["decimal"] = {
  init: function() {
    this.appendValueInput("number")
      .setCheck("Number")
      .appendField("keep")
      .appendField(new Blockly.FieldTextInput(2), "decimal_num")
      .appendField("decimal")
      
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["decimal"] = function(block) {
  var decimal_num = block.getFieldValue("decimal_num");
  // Blockly.Python.definitions_.import_turtle = "import fractions"
  var value_number = Blockly.Python.valueToCode(
    block,
    "number",
    Blockly.Python.ORDER_ATOMIC
  );
  // var code = `format(${value_number}, ',d')`;
  // 
  var code = `eval(format(float(${value_number}), '0.${decimal_num}f'))`;
  return [code, Blockly.Python.ORDER_NONE];
};


// 需要一个数学运算，保留几位数 可运算的

Blockly.Blocks['html_p_input'] = {
  init: function() {
    this.appendValueInput("content")
        .setCheck(null)
        .appendField("<p>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['html_p_input'] = function(block) {
  var value_content = Blockly.Python.valueToCode(block, 'content', Blockly.Python.ORDER_ATOMIC);
  // var value_content = block.getFieldValue('content')
  // TODO: Assemble JavaScript into code variable.
  value_content = eval(value_content)
  var code = `<p>${value_content}</p>`;

  return code;
};



Blockly.Blocks['output_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("variable output")
        .appendField(new Blockly.FieldVariable("variable"), "variable");
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['output_variable'] = function(block) {
  // Blockly.Python.quote_(block.getFieldValue('TEXT'))
  // svar variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var variable_variable = block.getFieldValue('variable') // Blockly.Python.quote_(block.getFieldValue('variable'));
  //console.log(window.v = variable_variable)
  var code = `"$${variable_variable}"`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['text_join_elite'] = {
  init: function() {
    this.appendValueInput("text1")
        .setCheck(null)
        .appendField("text join");
    this.appendValueInput("text2")
        .setCheck(null);
    this.appendValueInput("text3")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['text_join_elite'] = function(block) {
  var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
  var value_text2 = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
  var value_text3 = Blockly.Python.valueToCode(block, 'text3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  // console.log(value_text1,value_text2,value_text3)
  if(!value_text1){value_text1="''"}
  if(!value_text2){value_text2="''"}
  if(!value_text3){value_text3="''"}
  var code = eval(value_text1) + ' ' + eval(value_text2)+ ' ' + eval(value_text3)+ ' '
  // TODO: Change ORDER_NONE to the correct strength.
  //window.code = code
  return [`'${code}'`, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks["image"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("<img>")
      .appendField(new Blockly.FieldTextInput("http://url"), "url")
      .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["image"] = function(block) {
  var url = block.getFieldValue("url")
  // Rows and columns
  // TODO: Assemble Python into code variable.
  var code = `<img src="${url}" />`;
  return code;
};


Blockly.Blocks['table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("表格 行:")
        .appendField(new Blockly.FieldNumber(2, 0, 100), "row")
        .appendField("列")
        .appendField(new Blockly.FieldNumber(2, 0, 100), "column");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['table'] = function(block) {
  var number_row = parseInt(block.getFieldValue('row'));
  var number_column = parseInt(block.getFieldValue('column'));
  // TODO: Assemble Python into code variable.
  var table_content = ""
  for(let i in [...Array(number_row).keys()]){
      console.log(i)
      table_content += "<tr>\n"
      for(let j in [...Array(number_column).keys()]){
        table_content +=  `  <td class="text-center">td</td>\n`
      }
      table_content += `</tr>\n`
  };
  var header = `<link type="text/css" href="/asset-v1:EliteU+51040001+A1+type@asset+block@eliteu_course_table.css" rel="stylesheet"/>
  <table class="eliteu-course-table text-center">`;

  var footer = `</table>`

  return `${header}\n${table_content}\n${footer}`;
}

// 以上都正确
//  <choice correct="true" fixed="true">All of the above</choice>

