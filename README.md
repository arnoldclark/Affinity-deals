# HTML, JSON & CSV generator
A HTML, JSON and CSV data generator for ACVM's Affinity cars deals

Aims to reduce the amount of manual input required for updating Affinity deals across acvm.com, PDF templates and Affinity emails.

Quite rigid in that the input fields and output data is specifically for ACVM's Affinity Cars.

Shout [Eli](https://github.com/eli-nathan "@Eli-Nathan") if you'd like to see another version of this repurposed for a different part of the company.


## Setup
- Ensure you have Homebrew installed
- Clone the repo

### Install RBENV
```bash
brew install rbenv
```

#### Config RBENV
```bash
export PATH="$HOME/.rbenv/bin:$PATH"
```

```bash
eval "$(rbenv init -)"
```

### Install the correct RBENV version
```bash
rbenv install 2.3.1
```

#### If you hit ZLIB errors

```bash
brew install zlib
RUBY_CONFIGURE_OPTS="--with-zlib-dir=$(brew --prefix zlib)" rbenv install 2.3.1
```

## Install bundler
```bash
gem install bundler
```

```bash
bundle install
```

```bash
npm install
```

## Run
```bash
npm run dev
```


