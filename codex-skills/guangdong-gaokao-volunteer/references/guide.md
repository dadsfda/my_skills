# Guangdong Gaokao Volunteer Detailed Guide

## Operating Principle

Help the candidate make a better decision; do not make the decision for them. A useful answer should narrow choices, expose risks, and list exact official checks before confirmation.

## Step 1: Clarify the Case

Ask for missing information when it materially affects eligibility or risk:

- Year and exam type.
- 普通类物理/历史, 艺体类, 春季高考, 3+证书, 专项计划, 征集志愿.
- Score and provincial rank.
- Selected subjects and合格性考试 constraints when relevant.
- Target batch.
- Preferred provinces/cities, school tier, major direction, career plan, postgraduate plan.
- Budget and whether high-fee programs are acceptable.
- Whether民办, 中外合作, 联合培养, remote campus, or服从调剂 is acceptable.
- Medical exam issues: color blindness, color weakness, vision, height, disease restrictions.
- Single-subject scores, foreign language, oral test, political review/interview/physical test requirements.

If the user asks only for policy explanation, do not require personal score/rank.

## Step 2: Define Success Criteria

Before analysis, restate the target in verifiable form:

- Example: "目标是基于2026年广东普通类物理、分数X、排位Y，筛出本科批可考虑的冲稳保院校专业组，并标出选科、章程、体检和调剂风险。"
- Example: "目标是检查这张志愿草表是否存在明显资格不匹配、梯度失衡或专业调剂风险。"

## Step 3: Verify Current-Year Rules

Confirm the current-year version of:

- Fill-in time windows and confirmation deadline.
- Batch structure.
- Number of院校专业组志愿 and专业志愿.
- Whether the relevant batch uses平行志愿 or顺序志愿.
- Portal and confirmation requirements.
- Category-specific restrictions, especially艺体类,提前批,专项计划,春季高考,3+证书,征集志愿.

Use exact dates when discussing deadlines.

## Step 4: Position the Candidate

Use rank-first analysis:

- Compare the candidate's provincial rank with recent投档最低排位 in the same category.
- Treat score differences as secondary because yearly difficulty and score distribution shift.
- Use the current-year一分一段表 to contextualize the score.
- Mark comparisons as weaker if only score is available.

Avoid assuming:

- A school-level rank equals a specific专业组 rank.
- A专业组 remains comparable after major composition changes.
- A newly added major or changed plan count follows old-year patterns.

## Step 5: Screen Eligibility Before Preference

For each candidate院校专业组:

1. Check selected subject requirements.
2. Check batch and category.
3. Check招生章程 for录取规则.
4. Check single-subject, foreign language, oral test, height, gender, political review, interview, physical test, and medical restrictions.
5. Check tuition, campus, schooling mode, cooperation program, and certificate/diploma wording where relevant.
6. Check whether every possible adjusted major is acceptable.

If eligibility is uncertain, put the group in "待核验", not in the main recommendation.

## Step 6: Build the Ladder

Use "冲, 稳, 保" as risk labels, not promises:

- 冲: historical rank is somewhat ahead of the candidate or volatile. Useful when the candidate accepts risk.
- 稳: historical rank and plan conditions are close to the candidate's position with no obvious new adverse factor.
- 保: historical rank is clearly behind the candidate, major composition is acceptable, and eligibility is clean.

When exact thresholds are unavailable, describe the logic instead of inventing numeric cutoffs.

For each layer, explain:

- Why it belongs there.
- What could make the estimate wrong.
- Which official documents still need checking.

## Step 7: Inspect Major Group Risk

For every院校专业组:

- List the majors the candidate wants.
- List any majors the candidate cannot accept.
- Check whether服从调剂 could place the candidate into an unacceptable major.
- Check whether the group mixes high-demand and low-demand majors.
- Check professional constraints such as color vision, math/English requirements, and professional direction.

If a candidate refuses调剂, state退档风险 clearly.

## Step 8: Review an Existing Volunteer Draft

When the user provides a draft志愿表, check:

- Category and batch correctness.
-院校专业组 code/name consistency.
- Subject eligibility.
- Major codes and order.
-服从调剂 choices.
- Ladder balance.
- Repeated or missing志愿.
- Official source gaps.
- Deadline and confirmation status.

Return a table:

| Issue | Location | Risk | Suggested Check |
|---|---|---|---|

## Step 9: Answer Style

Use cautious, checkable language:

- Good: "从近年最低排位看，这一组更像稳中偏冲，但需要核验今年计划数和专业组构成。"
- Good: "如果不能接受该组内的A/B专业，不建议简单选择服从调剂。"
- Bad: "这个一定能上。"
- Bad: "按去年的分数线填就行。"

Always include:

- Data sources used.
- Assumptions.
- Risk list.
- Next checks.

## Common Output Shapes

### New Planning Request

```text
一、我需要/已使用的信息
二、当前定位
三、数据来源与核验状态
四、冲稳保候选清单
五、专业组内部风险
六、填报前检查清单
```

### Draft Review

```text
一、总体判断
二、明显问题
三、逐项检查表
四、需要回官方源核验的信息
五、修改建议
```

### Policy Explanation

```text
一、结论
二、适用对象
三、官方依据
四、容易误解的点
五、你下一步该查什么
```

## Safety Boundary

Do not:

- Ask for or store passwords, ID numbers, SMS codes, face verification, or login credentials.
- Operate the official志愿填报系统 on behalf of the candidate unless the user explicitly asks for general navigation help without sensitive credentials.
- Encourage last-minute rushed confirmation.
- Present a commercial tool's output as official.
- Hide uncertainty or omit material risks.
