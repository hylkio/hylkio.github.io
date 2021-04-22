---
layout: post
title: How to use single line & multiple lines statements in programming?
---

In many programming languages, there are alternative ways to do different things. We can easily write the same things into one single line as well as into multiple lines. There is no correct way to do that but here are some of my thoughts.

Here is one simple and quick example of this thing:
Single line type:

```python

new_list = [item for item in list_of_items if item < 10]
```

Multiple lines type:

```python

new_list = []
	for item in list_of_items:
		if item < 10:
			new_list.append(item)
```

As you can see, we can do the same thing in different ways. It depends on a concept or for example company rules, how you do the thing. In multiple line or single line way.
I think that usually making things in that "multiple lines" kind of way makes code more readable. Although, it depends on the stuff you're working on.

## Which one is cleaner: Multiple lines or single line type?

In my opinion, the single-line type is cleaner than the multiple-line type. That's basically because there are not then so many lines to confuse you.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ni326xh7ie6fbw336lfc.jpg)

## Pros of single line and multiple line types

- Sometimes more readable
- Decreases file sizes
- Is cleaner and better if statements are quite short

- When statements are really large or confusing it is more readable and cleaner
- Is widely used in large open-source projects

## More examples

```python
for index, item in enumerate(word):
	if index % 2 == 0:
		even = even + item
	else:
		odd = odd + item
	print(even + " " + odd)
```

vs

```python
for i in range(int(input())): s=input(); print(\*\["".join(s\[::2\]),"".join(s\[1::2\])\])
```

### or

```python
num\_words = int(input())
for i in range(num\_words):
	word = input()
	even = word\[::2\]
	odd = word\[1::2\]
	print(even, odd)
```

vs

```python
print(word[::2], word[1::2])
```

## Conclusion

---

When it comes to the question that which one should I use, there is no simple answer. Although, I would say that go with the option that feels better and is more readable in that case.

---

Feel free to check out my socials!

- [Github](https://github.com/sopanem)
- [Website](https://sopanem.github.io)
- [Twitter](https://twitter.com/sopanenm)
