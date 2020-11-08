import subprocess

def git_flow():
    res = subprocess.run(
        ['git', 'add', '.']
    )
    print(res)
    res = subprocess.run(
        ['git', 'commit', '-m', '"add"']
    )

if __name__ == "__main__":
    git_flow()